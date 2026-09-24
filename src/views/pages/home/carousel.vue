<script setup>
import { ref, onMounted } from "vue";
const currentSlide = ref(0);

const slides = ref([
  {
    title: "Governor of Kaduna State",
    description: "Senator Dr. Uba Sani , ",
    post:"CON",
      image: new URL("@/assets/img/head/image1.jpg", import.meta.url).href,
  },
  {
    title: "Commissioner of Education Kaduna State",
    description: "Prof. Abubakar Sambo , ",
    post:"OON NPOM",
       image: new URL("@/assets/img/head/image7.jpg", import.meta.url).href,
  },
  {
    title: "Director General",
    description: "Prof. Usman Abubakar Zaria",
    post:"MNSE, COREN Rgd",
       image: new URL("@/assets/img/head/image9.jpg", import.meta.url).href,
  },
]);
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  setInterval(nextSlide, 9000);
});
</script>

<template>
  <div class="position-relative w-100 vh-100 overflow-hidden mb-4">
    <!-- Carousel Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="position-absolute top-0 start-0 w-100 h-100 transition-opacity duration-1000"
      :class="{
        'opacity-100': currentSlide === index,
        'opacity-0': currentSlide !== index,
      }"
    >
      <!--image-->
      <div
        class="hero-bg"
        :style="{ backgroundImage: `url(${slide.image})` }"
      ></div>

      <!-- Overlay -->
      <div
        class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
      ></div>

      <!-- Slide Content -->
      <div
        class="position-relative h-100 d-flex flex-column justify-content-end align-items-start px-4 pb-5"
      >
        <div class="text-white">
          <h1
            class="display-5 fw-semibold mb-3 text-white mb-4"
            style="line-height: 2rem"
          >
            {{ slide.title }}
          </h1>
          <h6 class="fs-2 text-warning fw-bold mb-5 text-capitalize fst-italic">{{ slide.description }} <span class="fs-5">{{ slide.post }}</span></h6>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      @click="prevSlide"
      class="position-absolute top-50 start-0 translate-middle-y bg-white bg-opacity-25 text-white border-0 rounded-circle p-2 ms-3"
    >
      <i class="ri-arrow-left-double-line p-1 fs-6"></i>
    </button>

    <button
      @click="nextSlide"
      class="position-absolute top-50 end-0 translate-middle-y bg-white bg-opacity-25 text-white border-0 rounded-circle p-2 me-3"
    >
      <i class="ri-arrow-right-double-fill p-1 fs-6"></i>
    </button>
  </div>
</template>

<style scoped>
.transition-opacity {
  transition: opacity 1s ease-in-out;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: top; 
  background-repeat: no-repeat;

}
</style>
