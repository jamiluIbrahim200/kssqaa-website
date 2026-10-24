<script setup>
import { computed } from "vue";
import defineProps from "vue"
const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
    startRecord: {
        type: Number,
        default: 1,
    },
    searchQuery: {
        type: String,
        default: "",
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    totalPages: {
        type: Number,
        default: 1,
    },
    totalRecords: {
        type: Number,
        default: 0,
    },
    changePage: {
        type: Function,
        required: true,
    },
});

const endRecord = computed(() =>
    props.startRecord + props.items.length - 1
);

const isAvailableForCollection = (school) =>
    String(school?.status || "").trim().toLowerCase() ===
    "available for collection";
</script>

<template>
    <div class="table-responsive px-3">
        <table class="table certificate-table align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col" class="serial-column">S/N</th>
                    <th scope="col">School Name</th>
                    <th scope="col">Availability Status</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(school, index) in items" :key="school.schoolId">
                    <td class="serial-cell fs-11">
                        {{ startRecord + index }}
                    </td>

                    <td class="school-name fs-11">
                        {{ school.schoolName }}
                    </td>
                    <td>
                        <span class="badge bg-light-subtle border px-2 py-1 fs-11" :class="isAvailableForCollection(school)
                            ? 'text-primary border-primary'
                            : 'text-secondary border-secondary'">
                            {{ school.status || "Unknown" }}
                        </span>
                    </td>
                    <!-- <td class="fs-11">
                        <template v-if="isPrinted(school) && school.dateSent">
                            {{ school.dateSent }}
                        </template>
                    <span v-else class="not-available">—</span>
                    </td>
                    <td class="fs-11">
                        <template v-if="isPrinted(school) && school.collectionDate">
                                                {{ school.collectionDate }}
                                            </template>
                        <span v-else class="not-available">—</span>
                    </td> -->
                </tr>

                <tr v-if="items.length === 0">
                    <td colspan="5" class="empty-state">
                        <i class="ri-search-eye-line empty-icon"></i>
                        <h3 class="mb-3 text-secondary">
                            {{
                                searchQuery
                                    ? "No matching school found"
                                    : "No school records available"
                            }}
                        </h3>

                        <p class="mb-0">
                            {{
                                searchQuery
                                    ? "Check the spelling or try another school name."
                                    : "Please check again later."
                            }}
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <footer v-if="totalRecords > 0" class="pagination-footer">
        <p class="pagination-info mb-0">
            Showing {{ startRecord }}–{{ endRecord }}
            of {{ totalRecords }}
        </p>

        <nav aria-label="School records pagination">
            <ul class="pagination mb-0">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button type="button" class="page-link" :disabled="currentPage === 1"
                        @click="changePage(currentPage - 1)">
                        Previous
                    </button>
                </li>

                <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
                    <button type="button" class="page-link" :aria-current="page === currentPage ? 'page' : undefined
                        " @click="changePage(page)">
                        {{ page }}
                    </button>
                </li>

                <li class="page-item" :class="{
                    disabled: currentPage === totalPages
                }">
                    <button type="button" class="page-link" :disabled="currentPage === totalPages"
                        @click="changePage(currentPage + 1)">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    </footer>
</template>
<style scoped>
.certificate-table {
    font-size: 13px;
}

.certificate-table thead th {
    padding: 16px 14px;
    background: #f5f7f9;
    color: #647285;
    border-bottom: 1px solid #e6ebf0;
    font-size: 11px;
    font-weight: 750;
    text-transform: uppercase;
    letter-spacing: 0.35px;
    white-space: nowrap;
}

.certificate-table tbody td {
    padding: 17px 14px;
    border-color: #edf0f4;
}

.certificate-table tbody tr:hover td {
    background: #fafcfb;
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


.serial-column {
    width: 65px;
}

.serial-cell {
    color: #778496;
}

.school-name {
    min-width: 220px;
    color: #27384a;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 6px 10px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 650;
    white-space: nowrap;
}

.status-printed {
    background: #e5f5eb;
    color: #207448;
}

.status-pending {
    background: #fff3db;
    color: #95630b;
}

.not-available {
    color: #9aa5b2;
}

.pagination-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 18px 20px;
    border-top: 1px solid #edf0f4;
}

.pagination-info {
    color: #778496;
    font-size: 12px;
}

.pagination .page-link {
    color: #135f47;
    font-size: 12px;
}

.pagination .active .page-link {
    background: #135f47;
    border-color: #135f47;
    color: white;
}

.pagination .disabled .page-link {
    color: #a4aeba;
}
</style>
