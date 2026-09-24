<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";
const hero = reactive({
  h3: {
    first: "Introduction",
    second: "Our Leadership",
    third: "Our Mission",
    fourth: "Our Vision",
    fifth: "Commitment to Excellence",
  },

  image: new URL("@/assets/img/general/image4.jpeg", import.meta.url).href,
  organogram: new URL("@/assets/img/general/oranogram.PNG", import.meta.url).href,

  title: "Brief History",

  description1: `The Kaduna State Schools Quality Assurance Authority (KSSQAA) is at the forefront of ensuring equitable access to high-quality education for all students in Kaduna State. Established under Law No. 13 Section 4 in July 2017, KSSQAA emerged from the merger of the defunct Education Resource Centre (ERC), Private Schools Board (PSB), and Quality Assurance Board (QAB). As an integral arm of the Kaduna State Ministry of Education, we are committed to setting and maintaining exemplary standards in education service delivery.`,

  description2: `The current Director-General of KSSQAA is Prof. Usman Abubakar Zaria, appointed by His Excellency, the Executive Governor, Senator Malam Uba Sani, in 2023. Prof. Usman Abubakar Zaria brings a wealth of experience and expertise to the Authority, enhancing our commitment to educational excellence. Under his leadership, KSSQAA has witnessed a significant push towards automation, digitization, system strengthening, and reputation rebuilding.`,

  description3: `Our Authority is dedicated to continuous improvement in educational standards. We collaborate with stakeholders such as the Federal Education Quality Assurance Service (FEQAS) to align with national and global benchmarks. Through evaluation, planning, and proactive problem-solving, we ensure an environment that nurtures excellence.`,

  // Introduction list
  lists: [
    "Shehu Rabilu Birnin - Gwari 2017-2019",
    "Umma Kaltume Ahmed 2019-2021",
    "Aliyu Idris 2021-2022",
    "Adama Abdullahi Wada 2022-2023",
    "Prof. Usman Abubakar Zaria 2023-Present",
  ],

  // Departments dynamic
  departments: [
    "Examination Resource Department (ERD)",
    "Quality Assurance Department (QAD)",
    "Private Schools Department (PSD)",
    "Administration and Finance Department (AFD)",
  ],

  mission:
    "To provide qualitative and equitable education to citizens of Kaduna State, enabling them to attain their full potential, uphold moral values, and embrace unity in diversity.",

  vision:
    "To be a model in the provision of quality and inclusive education in Nigeria.",
});
</script>

<template>
  <Layout>
    <!-- HEADER SECTION -->
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

    <!-- MAIN SECTION -->
    <section class="section px-3">
        <BRow class="justify-content-start">
          <BCol lg="12">
            <div class="mb-5">

              <!-- INTRODUCTION -->
              <h3 class="fw-bold text-primary fs-3">
                {{ hero.h3.first }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>

              <p class="text-muted ff-secondary lead" style="line-height: 2.5rem; font-size: 14px;">
                {{ hero.description1 }}
              </p>

              <!-- Dynamic List -->
              <div class="mt-4 p-lg-4">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(item, index) in hero.lists"
                    :key="index"
                    class="d-flex align-items-start mb-4 text-secondary"
                  >
                    <span
                      class="flex-shrink-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3"
                      style="width: 20px; height: 20px"
                    >
                      <i class="ri-check-double-line fs-6"></i>
                    </span>
                    <span class="fw-medium">{{ item }}</span>
                  </li>
                </ul>
              </div>

              <p class="text-justify pt-1 text-muted mb-4" style="line-height: 2rem;">
                The Kaduna State Schools Quality Assurance Authority (KSSQAA) has the following departments, each headed by a Director:
              </p>

              <!-- ORG IMAGE -->
              <div class="w-100 d-flex flex-column align-items-center justify-content-center py-2">
                <img :src="hero.organogram" class="img-fluid mb-2" alt="Organogram" />
                <p class="py-3 fw-bold text-uppercase">KSSQAA Organogram</p>
              </div>

              <!-- Dynamic Departments -->
              <ul class="list-unstyled m-0 p-0 my-5">
                <li
                  v-for="(dept, index) in hero.departments"
                  :key="index"
                  class="d-flex align-items-start mb-3 text-secondary"
                >
                  <span
                    class="flex-shrink-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3"
                    style="width: 20px; height: 20px"
                  >
                    <i class="ri-check-double-line fs-6"></i>
                  </span>
                  <span>{{ dept }}</span>
                </li>
              </ul>

              <p class="text-justify pt-1 text-muted mb-4" style="line-height: 2rem;">
                Additionally, the Planning, Monitoring & Evaluation (PM&E) and Internal Audit Units play crucial roles in our operations. With a dedicated workforce, we are headquartered at the Government College premises in Abakpa, Kaduna.
              </p>

              <!-- LEADERSHIP -->
              <h3 class="fw-bold text-primary fs-3">
                {{ hero.h3.second }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>
              <p class="text-muted ff-secondary lead" style="line-height: 2.5rem; font-size: 14px;">
                {{ hero.description2 }}
              </p>

              <!-- MISSION -->
              <h3 class="fw-bold text-primary fs-3">
                {{ hero.h3.third }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>
              <p class="text-muted ff-secondary lead" style="line-height: 2.5rem; font-size: 14px;">
                {{ hero.mission }}
              </p>

              <!-- VISION -->
              <h3 class="fw-bold text-primary fs-3">
                {{ hero.h3.fourth }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>
              <p class="text-muted ff-secondary lead" style="line-height: 2.5rem; font-size: 14px;">
                {{ hero.vision }}
              </p>

              <!-- COMMITMENT -->
              <h3 class="fw-bold text-primary fs-3">
                {{ hero.h3.fifth }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>
              <p class="text-muted ff-secondary lead" style="line-height: 2.5rem; font-size: 14px;">
                {{ hero.description3 }}
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
  border-radius: 5px;
}
</style>
