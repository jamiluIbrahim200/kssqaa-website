<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";
import PartnerShip from "./stakeList.vue";
// import {
//   Autoplay,
//   Pagination,
//   Navigation,
//   EffectCoverflow,
//   EffectFade,
//   EffectFlip,
//   EffectCreative,
//   Mousewheel,
//   Scrollbar,
//   Thumbs,
// } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/vue";

// Swiper Styles
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/mousewheel";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-creative";
// import "swiper/css/effect-flip";
// import "swiper/css/effect-coverflow";

// const swiperModules = [
//   Autoplay,
//   Pagination,
//   Navigation,
//   EffectCoverflow,
//   EffectFade,
//   EffectFlip,
//   EffectCreative,
//   Mousewheel,
//   Scrollbar,
//   Thumbs,
// ];

const stake = reactive({
  h3: {
    first: "Our Stakeholders",
    description: `KSSQAA collaborates closely with key leadership figures whose vision, guidance, and policy direction ensure the delivery of quality education across Kaduna State.`,
  },
  image: new URL("@/assets/img/general/image4.jpeg", import.meta.url).href,
  title: "Our Stakeholders",
  description1: `KSSQAA works hand-in-hand with visionary leaders and partners committed to advancing the state's educational goals.`,
  description3: `For inquiries or partnership opportunities, visit us at our office located within the Government College premises, Abakpa, Kaduna.`,
  list: [
    "Kaduna State Government (KDSG)",
    "Ministry of Education, Kaduna State (MoE Kaduna)",
    "The Adolescent Girls Initiative for Learning and Empowerment (AGILE)",
    "The National Association of Proprietors of Private Schools (NAPPS)",
    "Partnership for Learning for All in Nigeria (PLANE)",
  ],
  // images: [
  //   new URL("@/assets/img/stakeholders/image1.png", import.meta.url).href,
  //   new URL("@/assets/img/stakeholders/image2.png", import.meta.url).href,
  //   new URL("@/assets/img/stakeholders/image3.png", import.meta.url).href,
  //   new URL("@/assets/img/stakeholders/image4.png", import.meta.url).href,
  // ],
});
</script>
<template>
  <Layout>
    <!-- Hero -->
    <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${stake?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ stake?.title }}
        </h1>
      </div>
    </section>

    <!-- Stakeholders Section -->
    <section id="stakeholders" class="px-3">
        <!-- <h3 class="mb-3 fw-bold text-primary fs-3 mt-5">
          {{ stake.h3.first }}
        </h3> -->
        <div class="short-line bg-primary mb-3"></div>

        <p
          class="text-muted mb-4 ff-secondary lead fw-semibold"
          style="line-height: 2rem; font-size: 16px"
        >
          {{ stake.description1 }}
        </p>

        <div class="container mt-4">
          <BRow class="align-items-start">
            <!-- LEFT: Stakeholder List -->
            <BCol cols="12" lg="6" class="mb-4">
              <ul class="list-unstyled m-0 p-0">
                <li
                  v-for="(title, index) in stake.list"
                  :key="index"
                  class="mb-3 d-flex"
                >
                  <span
                    class="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3 shadow-sm"
                    style="width: 26px; height: 26px; font-size: 12px"
                  >
                    <i class="ri-check-double-line"></i>
                  </span>
                  <p
                    class="mb-0 text-muted ff-secondary"
                    style="font-size: 14px"
                  >
                    {{ title }}
                  </p>
                </li>
              </ul>
            </BCol>
          </BRow>
        </div>
    </section>
    <PartnerShip />
  </Layout>
</template>

<!-- <div class="container mt-4">
          <BRow class="align-items-start">
            LEFT: Stakeholder List -->
<!-- <BCol cols="12" lg="6" class="mb-4">
              <ul class="list-unstyled m-0 p-0">
                <li
                  v-for="(title, index) in stake.list"
                  :key="index"
                  class="mb-3 d-flex"
                >
                  <span
                    class="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3 shadow-sm"
                    style="width: 26px; height: 26px; font-size: 12px"
                  >
                    <i class="ri-check-double-line"></i>
                  </span>
                  <p
                    class="mb-0 text-muted ff-secondary"
                    style="font-size: 14px"
                  >
                    {{ title }}
                  </p>
                </li>
              </ul>
            </BCol> -->

<!-- RIGHT: Swiper Slider -->
<!-- <BCol cols="12" lg="6">
              <Swiper
                class="rounded "
                :loop="true"
                :autoplay="{ delay: 2200, disableOnInteraction: false }"
                :pagination="{ clickable: true }"
                :modules="swiperModules"
                style="max-width: 100%"
              >
                <SwiperSlide v-for="(img, index) in stake.images" :key="index">
                  <img
                    :src="img"
                    class="img-fluid"
                    style="max-height: 220px; object-fit: contain; width: 100%"
                  />
                </SwiperSlide>

                <div class="swiper-pagination"></div>
              </Swiper>
            </BCol>-->
