<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";
import aboutquality from "@/assets/img/general/image7.jpeg";
const quality = reactive({
  h3: {
    first: "Quality Assurance DEPARTMENT",
  },

  qualityList: ["Evaluation Unit.", "Training Unit.", "SEP Unit."],

  image: aboutquality,

  title: "Quality Assurance Department (QAD) Activities",

  title2: "Evaluation is saddled with the responsibility of:",

  description1: `The Kaduna State Schools Quality Assurance Authority (KSSQAA) delivers a comprehensive 
  range of quality assurance services aimed at strengthening educational standards across Kaduna State. 
  Through systematic evaluation, effective monitoring, capacity building, and strict adherence to 
  regulatory benchmarks, KSSQAA ensures that schools operate in line with approved national and state 
  guidelines. The department plays a critical role in promoting accountability, enhancing teaching and 
  learning, and ensuring that every learner has access to a safe, effective, and well-supervised school 
  environment.`,

  list1: [
    "Whole School Evaluation of schools:",
    "Monitoring:",
    "Centre Recognition for WAEC, NECO, BECE, BAICE, and SAIQE:",
    "Training Unit:",
  ],

  lists2: [
    `This involves evaluators visiting assigned schools in groups of four or five and staying for 
    three days, thoroughly assessing all aspects of the school. So far, more than 250 schools have been 
    evaluated using the officially approved School Graded Assessment Tool (SGAT).`,

    `Monitoring is conducted during school resumption, midterm, and end of term. During the last 
    second-term resumption monitoring exercise, four hundred and ninety-eight (498) schools were 
    visited to ensure compliance with academic, administrative, and safety standards.`,

    `Centre recognition is carried out based on compliance with quality benchmarks and facility 
    suitability. Currently, Kaduna State has over 500 accredited WAEC, NECO, and BECE centres under 
    the supervision of KSSQAA.`,

    `This unit is responsible for training and capacity-building of evaluators. To date, a total of 
    301 evaluators have undergone professional training, with certificates issued upon successful 
    completion of their evaluation competency programs.`,
  ],
});

</script>
<template>
  <Layout>
     <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${quality.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ quality.title }}
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
              <h3 class="mb-3 fw-bold text-primary fs-5 text-capitalize" 
              style="line-height: 3rem;"
              >
                {{ quality?.title }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>
              <p
                class="text-muted mb-4 ff-secondary lead"
                style="line-height: 2.5rem; font-size: 14px"
              >
                {{ quality.description1 }}
              </p>

               <div class="mt-4 p-lg-4">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in quality?.qualityList"
                    :key="index"
                    class="mb-4 text-secondary"
                    
                  >
                    <!-- Icon + Title (same line) -->
                    <div class="d-flex align-items-center mb-2">
                      <span
                        class="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3 shadow-sm"
                        style="
                          width: 32px;
                          height: 32px;
                          transition: all 0.3s ease;
                        "
                      >
                        <i class="ri-check-double-line fs-6"></i>
                      </span>
                      <h6 class="fw-semibold text-dark mb-0">{{ title }}</h6>
                    </div>

                    <!-- Description below -->
                    <p
                      class="text-muted mb-0 ms-5  ff-secondary lead"
                      style="line-height: 2.5rem; font-size: 14px"
                    >
                      {{ services?.lists2[index] }}
                    </p>
                  </li>
                </ul>
              </div>
               <h3 class="mb-3 fw-bold text-primary fs-5 text-capitalize" 
                style="line-height: 3rem;"
              >
                {{ quality?.title2 }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>
              
              <div class="mt-4 p-lg-4">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in quality?.list1"
                    :key="index"
                    class="mb-4 text-secondary"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                  >
                    <!-- Icon + Title (same line) -->
                    <div class="d-flex align-items-center mb-2">
                      <span
                        class="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3 shadow-sm"
                        style="
                          width: 32px;
                          height: 32px;
                          transition: all 0.3s ease;
                        "
                      >
                        <i class="ri-check-double-line fs-6"></i>
                      </span>
                      <h6 class="fw-semibold text-dark mb-0 " style="font-size: 12px;">{{ title }}</h6>
                    </div>

                    <!-- Description below -->
                    <p
                      class="text-muted mb-0 ms-5  ff-secondary lead"
                      style="line-height: 2.5rem; font-size: 14px"
                    >
                      {{ quality?.lists2[index] }}
                    </p>
                  </li>
                </ul>
              </div>
             
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
