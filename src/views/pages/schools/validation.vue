<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";
import schoolHero from "@/assets/img/general/image4.jpeg";
const hero = reactive({
  h3:{
    first:'School Re - Validation',
  },
  image: schoolHero,
  title: "School Re - Validation",
  description1: `The school revalidation process is straightforward. The school must complete the form for the renewal of its annual license. The form template is available for download below. This template includes a list of documents that must be submitted to the Quality Assurance Authority for revalidation via the propietor's portal. The school's status will be updated following the submission of these required documents.click here to download a copy`,
  
 });
</script>
<template>
  <Layout>
    <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ hero.title }}
        </h1>
      </div>
    </section>
    <section class="py-5 px-3">
        <BRow class="justify-content-start">
          <BCol
            lg=""
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
          >
            <div class="mb-5">
              <h3 class="mb-3 fw-bold text-primary fs-3">{{ hero?.h3?.first }}</h3>
              <div class="short-line bg-primary mb-3"></div>
              <p
                class="text-muted mb-4 ff-secondary lead"
                style="line-height: 2.5rem; font-size: 14px"
              >
                {{ hero.description1 }}
              </p>
            </div>
          </BCol>
        </BRow>
    </section>
  </Layout>
</template>

<style>
.short-line {
  width: 50px;
  height: 5px;
  border-radius: px;
}
</style>
