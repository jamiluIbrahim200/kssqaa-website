<script setup>
import { defineProps } from 'vue';
defineProps({
  image: String,
  title: String,
});
</script>

<template>
  <section class="position-relative py-5 d-flex align-items-center">
    <!-- Background -->
    <div
      class="position-absolute top-0 start-0 w-100 h-100"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div
        class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"
      ></div>
    </div>

    <!-- Content -->
    <div
      class="position-relative container text-white"
      data-aos="zoom-in"
      data-aos-duration="700"
    >
      <h1 class="fs-5 fw-bold text-uppercase text-white" style="line-height: 3rem;">{{ title }}</h1>

      <router-link
        :to="{ name: 'home' }"
        class="btn btn-secondary mt-4"
      >
        <i class="ri-arrow-left-line me-2"></i> Back to News
      </router-link>
    </div>
  </section>
</template>
