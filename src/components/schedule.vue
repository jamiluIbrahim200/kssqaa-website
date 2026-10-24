
<script setup>
import { ref, computed, onMounted } from "vue";
import data from "./data";
import API_URL from "@/api/certificateApi.js";
import CertificateScheduleCard from "@/components/scheduleCard.vue";

const schedules = ref([]);
const searchQuery = ref("");
const loading = ref(false);
const error = ref("");

const filteredSchedules = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();

    if (!query) return schedules.value;

    return schedules.value.filter((schedule) => {
        const lgas = String(schedule.lgas || "").toLowerCase();
        const groupNumber = String(schedule.groupNumber ?? "");

        return lgas.includes(query) || groupNumber.includes(query);
    });
});

async function fetchSchedules() {
    loading.value = true;
    error.value = "";

    try {
        const response = await fetch(`${API_URL}?action=schedule`, {
            method: "GET",
            redirect: "follow",
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Request failed.");
        }

        const result = await response.json();

        if (!Array.isArray(result)) {
            throw new Error(
                result.error || "Unexpected response from the schedule service."
            );
        }

        schedules.value = result
            .map((schedule) => ({
                groupNumber: Number(schedule.groupNumber),
                lgas: String(schedule.lgas || "").trim(),
                collectionDate: String(schedule.collectionDate || "").trim(),
            }))
            .filter(
                (schedule) =>
                    Number.isFinite(schedule.groupNumber) &&
                    schedule.groupNumber > 0 &&
                    schedule.lgas &&
                    schedule.collectionDate
            )
            .sort((a, b) => a.groupNumber - b.groupNumber);
    } catch (err) {
        console.error("Certificate schedule API error:", err);

        error.value =
            "We could not load the collection schedule. Please check your connection and try again.";
    } finally {
        loading.value = false;
    }
}

function resetSearch() {
    searchQuery.value = "";
}

onMounted(fetchSchedules);
</script>

<template>
    <main class="certificate-page">
        <div class="container py-4 py-lg-5">
            <!-- Header -->
            <header class="portal-header mb-4">
                <div class="d-flex justify-content-center align-items-center gap-3">
                    <router-link class="navbar-brand" to="/">
                        <img
                            :src="data?.generalData?.generalLogo"
                            class="card-logo card-logo-dark"
                            alt="KSSQAA logo"
                            height="62"
                        />
                        <img
                            :src="data?.generalData?.generalLogo"
                            class="card-logo card-logo-light"
                            alt="KSSQAA logo"
                            height="62"
                        />
                    </router-link>
                </div>

                <h6 class="text-primary text-center mt-3">
                    KADUNA STATE SCHOOLS QUALITY ASSURANCE AUTHORITY
                </h6>
            </header>

            <!-- Introduction -->
            <section class="intro-section mb-4">
                <div class="avatar-sm img-thumbnail rounded-circle flex-shrink-0">
                    <div
                        class="avatar-title bg-light-subtle text-primary fw-semibold rounded-circle intro-icon"
                    >
                        <i class="ri-calendar-check-line"></i>
                    </div>
                </div>

                <div>
                    <h2 class="intro-title text-primary">
                        Official Certificate Collection Schedule
                    </h2>

                    <p class="intro-text mb-0">
                        Find out when schools in your Local Government Area
                        are scheduled to collect their certificates.
                    </p>
                </div>
            </section>

            <!-- Search and refresh -->
            <section class="records-card">
                <div class="records-toolbar">
                    <div class="search-wrapper">
                        <i class="ri-search-line search-icon"></i>

                        <input
                            v-model="searchQuery"
                            type="search"
                            class="form-control search-input"
                            placeholder="Search by LGA or collection group..."
                            aria-label="Search by Local Government Area or collection group"
                        />
                    </div>

                    <button
                        type="button"
                        class="btn reset-button"
                        :disabled="!searchQuery"
                        @click="resetSearch"
                    >
                        <i class="ri-refresh-line me-1"></i>
                        Reset
                    </button>

                    <button
                        type="button"
                        class="btn refresh-button"
                        :disabled="loading"
                        @click="fetchSchedules"
                    >
                        <i
                            :class="loading
                                ? 'ri-loader-4-line'
                                : 'ri-refresh-line'"
                            class="me-1"
                        ></i>

                        {{ loading ? "Loading..." : "Refresh" }}
                    </button>
                </div>

                <!-- Results summary -->
                <div
                    v-if="!loading && !error"
                    class="records-summary"
                >
                    <span>
                        Showing
                        <strong>{{ filteredSchedules.length }}</strong>
                        matching
                        {{
                            filteredSchedules.length === 1
                                ? "schedule"
                                : "schedules"
                        }}
                    </span>
                </div>

                <!-- Error -->
                <div
                    v-if="error"
                    class="alert alert-danger m-3"
                    role="alert"
                >
                    {{ error }}

                    <button
                        type="button"
                        class="btn btn-sm btn-outline-danger ms-2"
                        @click="fetchSchedules"
                    >
                        Try again
                    </button>
                </div>

                <!-- Loading -->
                <div
                    v-else-if="loading && schedules.length === 0"
                    class="loading-state"
                    aria-live="polite"
                >
                    <div
                        class="spinner-border text-primary mb-3"
                        role="status"
                    >
                        <span class="visually-hidden">
                            Loading schedules...
                        </span>
                    </div>

                    <p class="mb-0">
                        Loading certificate collection schedules...
                    </p>
                </div>

                <!-- No schedules available -->
                <div
                    v-else-if="!loading && schedules.length === 0"
                    class="empty-state"
                >
                    <i class="ri-calendar-close-line empty-icon"></i>

                    <h3>No Schedules Available</h3>

                    <p class="mb-0">
                        The certificate collection schedule is not currently
                        available. Please check again later.
                    </p>
                </div>

                <!-- No search results -->
                <div
                    v-else-if="filteredSchedules.length === 0"
                    class="empty-state"
                >
                    <i class="ri-search-eye-line empty-icon"></i>

                    <h3>No Matching Schedule Found</h3>

                    <p>
                        No collection schedule matches
                        "{{ searchQuery }}".
                    </p>

                    <button
                        type="button"
                        class="btn refresh-button"
                        @click="resetSearch"
                    >
                        Clear Search
                    </button>
                </div>

                <!-- Schedule cards -->
                <div v-else class="schedule-grid">
                    <CertificateScheduleCard
                        v-for="schedule in filteredSchedules"
                        :key="schedule.groupNumber"
                        :schedule="schedule"
                    />
                </div>
            </section>

            <!-- Important information -->
            <p class="portal-note mt-4">
                <i class="ri-information-line me-1"></i>

                Schools are advised to follow the collection schedule assigned
                to their Local Government Area. Please confirm the scheduled
                date before visiting the Authority.
            </p>
        </div>
    </main>
</template>

<style scoped>
.certificate-page {
    min-height: 100vh;
    background: #f5f7fa;
    color: #263445;
}

.portal-header {
    padding-bottom: 24px;
    border-bottom: 1px solid #e0e6ed;
}

.intro-section {
    display: flex;
    align-items: flex-start;
    gap: 15px;
}

.intro-icon {
    flex-shrink: 0;
    border-radius: 10px;
    background: #e5f2ec;
    font-size: 24px;
}

.intro-title {
    margin-bottom: 7px;
    font-size: 16px;
    font-weight: 750;
    line-height: 1.6;
}

.intro-text {
    font-size: 12px;
    line-height: 1.8;
    color: #697789;
}

.records-card {
    overflow: hidden;
    background: #fff;
    border: 1px solid #e4e9ef;
    border-radius: 6px;
    box-shadow: 0 4px 18px rgb(25 42 70 / 4%);
}

.records-toolbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px;
}

.search-wrapper {
    position: relative;
    flex: 1;
    min-width: 0;
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 14px;
    color: #7c8998;
    font-size: 19px;
    transform: translateY(-50%);
    pointer-events: none;
}

.search-input {
    min-height: 46px;
    padding-left: 43px;
    border-color: #dce3eb;
    font-size: 14px;
}

.search-input:focus {
    border-color: #135f47;
    box-shadow: 0 0 0 3px rgb(19 95 71 / 10%);
}

.refresh-button,
.reset-button {
    min-height: 46px;
    padding: 0 16px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
}

.refresh-button {
    color: #fff;
    background: #135f47;
}

.refresh-button:hover:not(:disabled) {
    color: #fff;
    background: #0e4c38;
}

.refresh-button:disabled {
    opacity: 0.7;
}

.reset-button {
    color: #475569;
    background: #fff;
    border: 1px solid #dce3eb;
}

.reset-button:hover:not(:disabled) {
    color: #135f47;
    border-color: #135f47;
}

.reset-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.records-summary {
    padding: 12px 20px;
    color: #677587;
    font-size: 12px;
    background: #f9fafb;
    border-top: 1px solid #edf0f4;
    border-bottom: 1px solid #edf0f4;
}

.records-summary strong {
    color: #263445;
}

.schedule-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    padding: 20px;
}

.loading-state,
.empty-state {
    padding: 55px 20px;
    color: #778496;
    text-align: center;
}

.empty-icon {
    display: block;
    margin-bottom: 12px;
    color: #a6b1be;
    font-size: 36px;
}

.empty-state h3 {
    margin-bottom: 8px;
    color: #354457;
    font-size: 17px;
    font-weight: 700;
}

.empty-state p {
    font-size: 13px;
    line-height: 1.8;
}

.portal-note {
    color: #738092;
    font-size: 12px;
    line-height: 1.8;
}

@media (max-width: 991.98px) {
    .schedule-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 767.98px) {
    .records-toolbar {
        flex-wrap: wrap;
        padding: 14px;
    }

    .search-wrapper {
        flex-basis: 100%;
    }

    .reset-button,
    .refresh-button {
        flex: 1;
    }

    .records-summary {
        padding: 12px 14px;
    }

    .schedule-grid {
        grid-template-columns: minmax(0, 1fr);
        padding: 14px;
        gap: 14px;
    }
}
</style>
