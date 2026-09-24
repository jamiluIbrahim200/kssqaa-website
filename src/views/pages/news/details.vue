<script setup>
import { defineProps } from 'vue';
defineProps({
  date: String,
  views: String,
  description: String,
});
</script>

<template>
  <section class="py-5">
    <BContainer>
      <ul class="list-inline fs-14 text-muted mb-3">
        <li class="list-inline-item me-3">
          <i class="ri-calendar-line align-bottom me-1 text-primary"></i>
          {{ date }}
        </li>
        <li class="list-inline-item">
          <i class="ri-eye-line align-bottom me-1 text-primary"></i>
          {{ views }}
        </li>
      </ul>

      <p
          class="text-muted  ff-secondary lead "
          style="line-height: 2.5rem; font-size: 14px"
        >
          {{ description }}
        </p>
    </BContainer>
  </section>
</template>
