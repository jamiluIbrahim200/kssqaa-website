<script setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

import img1 from "@/assets/img/stakeholdersImg/image1.png";
import img2 from "@/assets/img/stakeholdersImg/image2.png"; 
import img3 from "@/assets/img/stakeholdersImg/image3.png";
import img4 from "@/assets/img/stakeholdersImg/image5.png";
import img5 from "@/assets/img/stakeholdersImg/image4.png";
import img6 from "@/assets/img/stakeholdersImg/image1.png";
import img7 from "@/assets/img/stakeholdersImg/image2.png";
import img8 from "@/assets/img/stakeholdersImg/image5.png";
import img9 from "@/assets/img/stakeholdersImg/image3.png";
import img10 from "@/assets/img/stakeholdersImg/image2.png";


const slide = ref([
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },

])
</script>

<template>
  <div>
    <BContainer>
      <BRow>
        <BCol lg="12">
          <div class="text-center">
            <h3 class="fs-1 lead fw-bold">
              <span class="text-secondary">Stakeholders</span>
            </h3>
            <div class="trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4">
              <swiper
                class="swiper responsive-swiper rounded gallery-light pb-4"
                :loop="true"
                :autoplay="true"
                :modules="[Autoplay]"
                :slidesPerView="1"
                :spaceBetween="10"
                :breakpoints="{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 40 },
                  1200: { slidesPerView: 4, spaceBetween: 50 },
                }"
              >
                <swiper-slide
                  v-for="(slidingImg, index) in slide"
                  :key="index"
                >
                  <div class="client-images">
                    <img
                      :src="slidingImg.image"
                      alt="client-img"
                      class="mx-auto img-fluid d-block"
                      style="max-height: 70px"
                    />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>
