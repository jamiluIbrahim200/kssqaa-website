<script setup>
import { defineProps } from 'vue';
defineProps({
    schedule: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <article class="certificate-schedule-card h-100">
        <div class="schedule-card-header d-flex align-items-center justify-content-between">
            <span class="schedule-group-label">
               Schedule 
            </span>
            <div class="avatar-xs img-thumbnail rounded-circle flex-shrink-0">
                <div>
                    <div class="avatar-title bg-light-subtle text-primary fw-semibold rounded-circle intro-icon">
                        {{ schedule.groupNumber }} </div>
                </div>
            </div>
        </div>
        <div class="schedule-card-body">
            <div class="schedule-detail">
                <div class="avatar-xs img-thumbnail rounded-circle flex-shrink-0">
                    <div>
                        <div class="avatar-title bg-light-subtle text-primary fw-semibold rounded-circle intro-icon">
                            <i class="ri-map-pin-line"></i>
                        </div>
                    </div>
                </div>
                <div class="schedule-detail-content">
                    <span class="schedule-detail-label">
                        Local Government Areas
                    </span>

                    <p class="schedule-lga-list text-secondary mb-0">
                        {{ schedule.lgas }}
                    </p>
                </div>
            </div>

            <div class="schedule-detail schedule-date-detail">
                <div class="avatar-xs img-thumbnail rounded-circle flex-shrink-0">
                    <div>
                        <div class="avatar-title bg-light-subtle text-primary fw-semibold rounded-circle intro-icon">
                            <i class="ri-calendar-event-line"></i>
                        </div>
                    </div>
                </div>
                <div class="schedule-detail-content">
                    <span class="schedule-detail-label">
                        School Collection Date
                    </span>

                    <p class="schedule-date text-primary mb-0">
                        {{ schedule.collectionDate }}
                    </p>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.intro-icon {
    flex-shrink: 0;
    border-radius: 10px;
    background: #e5f2ec;
    font-size: 16px;
}

.certificate-schedule-card {
    overflow: hidden;
    background: #fff;
    border: 1px solid #e7eaf0;
    border-radius: 5px;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
}

.certificate-schedule-card:hover {
    border-color: #cbd5e1;
    box-shadow: 0 8px 24px rgb(15 23 42 / 6%);
    transform: translateY(-2px);
}

.schedule-card-header {
    padding: 10px 12px;
    background: #f8fafc;
    border-bottom: 1px solid #e7eaf0;
}

.schedule-group-label {
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
}

.schedule-group-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 10px;
    color: #135fAD;
    font-size: 15px;
    font-weight: 700;
    background: #eaf3ff;
    border-radius: 9px;
}

.schedule-card-body {
    padding: 22px 20px;
}

.schedule-detail {
    display: flex;
    align-items: center;
    gap: 13px;
}

.schedule-detail-icon {
    display: flex;
    flex: 0 0 40px;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #135fad;
    font-size: 19px;
    background: #f0f6ff;
    border-radius: 10px;
}

.schedule-detail-content {
    min-width: 0;
    padding-top: 2px;
}

.schedule-detail-label {
    display: block;
    margin-bottom: 3px;
    color: #64748b;
    font-size: 12px;
    font-weight: 500;
}

.schedule-lga-list {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.7;
    overflow-wrap: anywhere;
}

.schedule-date-detail {
    margin-top: 22px;
    padding-top: 20px;
    border-top: 1px solid #edf0f4;
}

.schedule-date {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
}
</style>
