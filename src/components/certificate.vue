<script setup>
import SchoolsCertificateTable from "./Table.vue";
import { ref, computed, onMounted } from 'vue';
import data from "./data";
import API_URL from '@/api/certificateApi.js';
const schools = ref([]);
const searchQuery = ref('');
const currentPage = ref(1);
const perPage = 10;
const loading = ref(false);
const error = ref('');
const lastUpdated = ref(null);
const filteredSchools = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();
    if (!query) return schools.value;
    return schools.value.filter((school) =>
        school.schoolName.toLowerCase().includes(query)
    );
});

const totalPages = computed(() =>
    Math.ceil(filteredSchools.value.length / perPage)
);

const paginatedSchools = computed(() => {
    const start = (currentPage.value - 1) * perPage;

    return filteredSchools.value.slice(start, start + perPage);
});

const startRecord = computed(() =>
    filteredSchools.value.length
        ? (currentPage.value - 1) * perPage + 1
        : 0
);

// const endRecord = computed(() =>
//     Math.min(
//         currentPage.value * perPage,
//         filteredSchools.value.length
//     )
// );

async function fetchSchools() {
    loading.value = true;
    error.value = '';

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            redirect: 'follow',
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error(
                data.error || 'Unexpected response from the certificate service.'
            );
        }

        schools.value = data.map((school) => ({
            ...school,
            schoolName: String(school.schoolName || ''),
            status: String(school.status || '').trim()
        }));

        lastUpdated.value = new Date();
    } catch (err) {
        console.error('Certificate API error:', err);

        error.value =
            'We could not load certificate records. Please check your connection and try again.';
    } finally {
        loading.value = false;
    }
}

function handleSearch() {
    currentPage.value = 1;
}

function changePage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

onMounted(fetchSchools);
</script>

<template>
    <main class="certificate-page">
        <div class="container py-4 py-lg-5">
            <!-- Header -->
            <header class="portal-header mb-4">
                <div class="d-flex justify-content-center align-items-center gap-3">
                    <router-link class="navbar-brand" to="/">
                        <img :src="data?.generalData?.generalLogo" class="card-logo card-logo-dark" alt="logo dark"
                            height="62" />
                        <img :src="data?.generalData?.generalLogo" class="card-logo card-logo-light" alt="logo light"
                            height="62" />
                    </router-link>
                </div>
                <h6 class="text-primary text-center mt-3">KADUNA STATE SCHOOLS QUALITY ASSURANCE AUTHORITY</h6>
            </header>
            <!-- Introduction -->
            <section class="intro-section mb-4">
                <div class="avatar-sm img-thumbnail rounded-circle flex-shrink-0">
                    <div>
                        <div class="avatar-title bg-light-subtle text-primary fw-semibold rounded-circle intro-icon">
                            <i class="ri-file-shield-2-line"></i>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="intro-title text-primary">
                        Check Certificate Availability
                    </h2>
                    <p class="intro-text mb-0">
                        Search for your school to check whether its certificates
                        are available for collection.
                    </p>
                </div>

            </section>
            <!-- Search and refresh -->
            <section class="records-card">
                <div class="records-toolbar">
                    <div class="search-wrapper">
                        <i class="ri-search-line search-icon"></i>
                        <input v-model="searchQuery" type="search" class="form-control search-input"
                            placeholder="Search by school name..." aria-label="Search schools by name"
                            @input="handleSearch" />
                    </div>
                    <button type="button" class="btn refresh-button" :disabled="loading" @click="fetchSchools">
                        <i :class="loading
                            ? 'ri-loader-4-line'
                            : 'ri-refresh-line'" class="me-1"></i>

                        {{ loading ? 'Loading...' : 'Refresh' }}
                    </button>
                </div>
                <!-- Error -->
                <div v-if="error" class="alert alert-danger m-3" role="alert">
                    {{ error }}
                    <button class="btn btn-sm btn-outline-danger ms-2" type="button" @click="fetchSchools">
                        Try again
                    </button>
                </div>
                <!-- Loading -->
                <div v-else-if="loading && schools.length === 0" class="loading-state">
                    <div class="spinner-border text-primary mb-3" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>

                    <p class="mb-0">Loading certificate records...</p>
                </div>
                <SchoolsCertificateTable v-else :items="paginatedSchools" :start-record="startRecord"
                    :search-query="searchQuery" :current-page="currentPage" :total-pages="totalPages"
                    :total-records="filteredSchools.length" :change-page="changePage" />
            </section>


            <p class="portal-note mt-4">
                <i class="ri-information-line me-1"></i>
                Certificate availability records are provided by the
                Kaduna State School Quality Assurance Authority (KSSQAA).
                Please confirm your school's status before making further enquiries.
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

.portal-subtitle {
    color: #697789;
    font-size: 14px;
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
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 750;
    margin-bottom: 7px;
}

.intro-text {
    line-height: 1.65;
    font-size: 12px;
}

.records-card {
    background: white;
    border: 1px solid #e4e9ef;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 18px rgb(25 42 70 / 4%);
}

.records-toolbar {
    display: flex;
    gap: 12px;
    padding: 20px;
    align-items: center;
}

.search-wrapper {
    flex: 1;
    position: relative;
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    color: #7c8998;
    font-size: 19px;
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

.refresh-button {
    min-height: 46px;
    padding: 0 17px;
    background: #135f47;
    color: white;
    font-weight: 600;
    white-space: nowrap;
}

.refresh-button:hover {
    background: #0e4c38;
    color: white;
}

.refresh-button:disabled {
    opacity: 0.7;
}

.records-summary {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 20px;
    background: #f9fafb;
    border-top: 1px solid #edf0f4;
    border-bottom: 1px solid #edf0f4;
    color: #677587;
    font-size: 12px;
}

.loading-state,
.empty-state {
    padding: 55px 20px !important;
    text-align: center;
    color: #778496;
}

.empty-icon {
    display: block;
    margin-bottom: 12px;
    color: #a6b1be;
    font-size: 34px;
}

.empty-state h3 {
    font-size: 17px;
    font-weight: 700;
    color: #354457;
}

.empty-state p {
    font-size: 13px;
}


.portal-note {
    color: #738092;
    font-size: 12px;
    line-height: 1.7;
}


@media (max-width: 576px) {
    .records-toolbar {
        padding: 14px;
        align-items: stretch;
    }

    .refresh-button {
        padding: 0 11px;
    }

    .records-summary {
        padding: 12px 14px;
        font-size: 11px;
    }

    .pagination-footer {
        padding: 16px 12px;
    }

    .pagination .page-link {
        padding: 6px 8px;
    }
}
</style>
