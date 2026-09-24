<script setup>
import { reactive } from "vue";
// Dynamic data for the Dean's Welcome Message
const welcome = reactive({
  head: "About Kaduna State School Quality Assurance Authority (KSSQAA)",
  name: "Director-General.",
  role: "Prof. Usman Abubakar Zaria",
  image: new URL("@/assets/img/head/image3.jpg", import.meta.url).href  ,
  message1: `We are dedicated to revolutionizing education by ensuring every learner has the tools and opportunities to succeed. Our goal is to establish an equitable foundation that empowers students from all walks of life with high-quality education cultivating not only academic excellence but also personal integrity and resilience.`,
  message2: `Through dynamic, curiosity-driven learning experiences, we aim to spark creativity, nurture critical thinking, and equip young minds to navigate an ever-evolving global landscape. Central to our mission are three pillars: inclusivity, educational excellence, and innovation. We prioritize providing educators with cutting-edge resources, broadening access to diverse learning environments, and fostering collaboration with families and communities.`,
  message3: `By doing so, we envision a future where every child feels seen, supported, and capable of achieving their fullest potential. Together, we are building an education system that mirrors the aspirations of our society one that shapes adaptable, compassionate, and forward thinking citizens ready to make meaningful contributions. We extend our profound gratitude for your partnership in turning this vision into reality; let’s continue working side by side to create lasting change for generations to come.`,
});
</script>

<template>
  <BCard>
    <BRow
        class="align-items-center justify-content-lg-between justify-content-center gy-3 py-2 py-lg-3 "
      >
        <p class="fs-3 fw-semibold text-uppercase text-center text-secondary"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          {{ welcome?.head }}
        </p>
        <BCol
          lg="5"
          sm="7"
          class=""  
        >
          <div class="about-img-section md:mb-5 mb-lg-0 text-center">
            <BCard no-body class="feedback-box shadow-sm border-0 mb-3">
              <BCardBody class="d-flex align-items-center">
                <!-- <i class="ri-user-star-fill text-primary fs-3 me-3"></i> -->
                <div class="flex-grow-1 text-start">
                  <h5 class="fs-6 lh-base mb-1 fw-bold text-primary">
                    {{ welcome.name }}
                  </h5>
                  <p class="text-muted mb-0" style="font-size: 13px">
                    {{ welcome.role }}
                  </p>
                </div>
              </BCardBody>
            </BCard>
            <img
              :src="welcome.image"
              alt="commisioner"
              class="img-fluid mx-auto rounded-3 shadow-lg"
            />
          </div>
        </BCol>

        <BCol
          lg="7"
          class="px-3"
          data-aos="fade-up"
          data-aos-duration="100"
          data-aos-delay="100"
        >
          <div class="text-muted px-lg-4">
            <p class="ff-secondary fs-6 mb-3" style="line-height: 2rem">
              <span class="text-primary fw-bold"> At KSSQAA </span>
              {{ welcome.message1 }}
            </p>
            <p class="ff-secondary fs-6 mb-3" style="line-height: 2rem">
              {{ welcome.message2 }}
            </p>
            <p class="ff-secondary fs-6" style="line-height: 2rem">
              {{ welcome.message3 }}
            </p>
          </div>
        </BCol>
      </BRow>
  </BCard>
      
</template>

<style scoped>
h2 span {
  font-weight: bold;
}
</style>
