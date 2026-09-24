<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import bgImage from "@/assets/img/general/bg2.png";

const hero = {
  image: bgImage,
};

const currentSlide = ref(0);

const slides = ref([
  {
    title: "Governor Of Kaduna State",
    description: "Senator Dr. Uba Sani.",
    describe:
      "Welcome to the Kaduna State Schools Quality Assurance Authority (KSSQAA)",
    description2:
      "Thank you for visiting the official website of the Kaduna State Schools Quality Assurance Authority (KSSQAA). Your presence here reflects an interest in the pursuit of quality standards, and we appreciate your commitment to excellence.",
    image: new URL("@/assets/img/head/image1.jpg", import.meta.url).href,
  },
  {
    title: "Honorable Commissioner of Education Kaduna State",
    description: "Prof. Abubakar Sambo.",
    description2:
      "We are committed to ensuring that every student in Kaduna State receives high-quality education. Our guiding principles include professionalism, integrity, accountability, teamwork, equity, and mentorship.",
    image: new URL("@/assets/img/head/image8.jpg", import.meta.url).href,
  },
  {
    title: "Director-General",
    description: "Prof. Usman Abubakar Zaria",
    description2:
      "We are committed to ensuring that every student in Kaduna State receives high-quality education. Our guiding principles include professionalism, integrity, accountability, teamwork, equity, and mentorship.",
    image: new URL("@/assets/img/head/image3.jpg", import.meta.url).href,
  },
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

let interval;
onMounted(() => {
  interval = setInterval(nextSlide, 10000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
<template>
  <div class="position-relative w-100 vh-100 bg-primary">
    <div class="bg-overlay bg-overlay-pattern"></div>
    <!-- Background -->
    <div
      class="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
      :style="{ backgroundImage: `url(${hero.image})` }"
    ></div>
    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center transition-opacity px-lg-5"
      :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
    >
      <div class=" position-relative text-white">
        <div class="row align-items-center">
          <!-- LEFT: TEXT -->
          <div class="col-lg-6 mb-4 mb-lg-0">
            <p class="fw-normal mb-4 text-white fs-4" style="line-height: 2.4rem;">{{ slide?.description2 }}</p>
            <h1 class="fw-bold mb-4 text-warning ">{{ slide.title }}</h1>
            <p class="fs-3 fst-italic text-uppercase">{{ slide.description }}</p>
          </div>

          <!-- RIGHT: CIRCULAR IMAGE -->
          <div class="col-lg-6 text-center">
            <div class="circle-image mx-auto shadow-lg">
              <img :src="slide.image" alt="Slide" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DOT NAVIGATION -->
    <div
      class="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2"
    >
      <span
        v-for="(_, index) in slides"
        :key="index"
        class="carousel-dot"
        :class="{ active: currentSlide === index }"
        @click="currentSlide = index"
      ></span>
    </div>
  </div>
</template>
<style>
.transition-opacity {
  transition: opacity 1s ease-in-out;
}

/* Perfect circular image */
.circle-image {
  width: 450px;
  height: 450px;
  border-radius: 50%;
  overflow: hidden;
}

.circle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Dot navigation */
.carousel-dot {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot.active {
  background-color: #fff;
  transform: scale(1.3);
}
</style>
