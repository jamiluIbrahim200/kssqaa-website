<script setup>
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/empty-list.json";
const defaultOptions = {
  animationData: animationData,
};

import image1 from "@/assets/img/coreValues/image1.jpeg";
import image2 from "@/assets/img/coreValues/image2.jpeg";
import image3 from "@/assets/img/coreValues/image3.jpeg";
import image4 from "@/assets/img/coreValues/image4.jpeg";
import image5 from "@/assets/img/coreValues/image5.jpeg";
import image6 from "@/assets/img/coreValues/image6.jpeg";

const CoreValues = [
  {
    image: image1,
    title: "Professionalism",
    description:
      "We shall conduct quality assurance evaluation exercises with only qualified and accredited Quality Assurance Evaluation (QAEs) at all times to facilitate exhibition of appropriate competence, integrity and adherence to quality assurance service delivery standards at all times.",
  },
  {
    image: image2,
    title: "Integrity",
    description:
      "We shall ensure that all quality assurance evaluation processes and findings are done in a transparent way. The form that will be used for the Whole School Evaluation (WSE) will first be given to the schools for them to conduct Self Evaluation. The report of the self-evaluation will be studied and compared with the findings of the WSE (which is an external evaluation). The report will be made open with more detailed explanations on the rationale for any judgement and conclusion as part of the feedback to the schools.",
  },
  {
    image: image3,
    title: "Accountability",
    description:
      "We shall use a feedback mechanism on the findings and conclusions from all quality assurance evaluation to drive improvement in learning outcomes and healthy performance competition, rewards among other strategies to stimulate enhanced performance accountability for the huge investment into the education system.",
  },
  {
    image: image4,
    title: "Team-work",
    description:
      "We are a strong team of educational professionals with diverse skills who are proud to work together to ensure quality education management. We carry along all that have a stake in education through shared ideas and respecting the perspectives of each other, while seeking to achieve organisational goals.",
  },
  {
    image: image5,
    title: "Equity",
    description:
      "We will make judgements that are free from discrimination or bias. We treat people equitably based on their peculiar circumstance in accordance with acceptable rules,principles and standards. Our services and systems shall be inclusive; we shall be respectful to all people no matter their religion, gender, physical, intellectual and socio-economic status to ensure that we attain required standards and benchmarks.",
  },
  {
    image: image6,
    title: "Mentorship",
    description:
      "We shall uphold the trust placed on us by duty through constant guidance, counselling, coaching, hand-holding, and training and retraining of evaluators and potential evaluators with life-field experiences.",
  },
];
</script>
<template>
  <section id="section" class="py-5 bg-light px-3">
      <!-- Dynamic Section Title -->
      <h4
        class="fs-1 font-bold text-uppercase text-center text-secondary"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="600"
      >
        Our Core Values
      </h4>

      <!-- No Results -->
      <div v-if="CoreValues.length === 0" class="text-center">
        <BCol lg="12" class="text-center">
          <lottie
            class="img-fluid"
            colors="primary:#121331,secondary:#08a88a"
            :options="defaultOptions"
            :height="100"
            :width="150"
          />
        </BCol>
        <p class="fs-5 text-muted">Oops! No results found.</p>
      </div>
      <BRow v-else>
        <BCol
          lg="4"
          md="6"
          v-for="(cores, index) in CoreValues"
          :key="index"
          class="d-flex mb-2 mt-4"
          data-aos="fade-up"
          data-aos-duration="600"
          :data-aos-delay="200 * (index + 1)"
        >
          <BCard
            no-body
            class="h-100 w-100 d-flex flex-column overflow-hidden shadow-sm border-0 card-hover "
          >
            <!-- Image Section -->
            <!-- <div class="card-image-wrapper">
              <img :src="cores.image" alt="cores image" class="card-image" />
            </div> -->

            <!-- Text Section -->
            <BCardBody
              class="flex-grow-1 d-flex flex-column justify-content-start"
            >
              <div class="d-flex justify-content-center align-items-center mb-2">
                <i class="ri-shake-hands-line me-2 fs-1 text-secondary"></i>
                <h5 class="fw-semibold mb-0 fs-4 text-secondary text-uppercase fst-italic">
                  {{ cores.title }}
                </h5>
              </div>
              <p class="text-muted fs-6 mt-2" style="line-height: 2rem">
                {{ cores.description }}
              </p>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
  </section>
</template>

<style>
.bigger {
  font-size: 3rem;
}
.academic-card {
  transition: transform 0.5s ease, box-shadow 0.3s ease;
}
.academic-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-image-wrapper {
  width: 100%;
  height: 220px; /* fixed uniform image height */
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Hover effect */
.card-hover:hover .card-image {
  transform: scale(1.08);
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
</style>
