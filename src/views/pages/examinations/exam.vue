<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";
import aboutHero from "@/assets/img/general/image4.jpeg";

const hero = reactive({
  title: "Examinations",
  image: aboutHero,
  h3: {
    first: "Examination Overview",
    second: "Available Examinations",
  },
  description: `The kssqaa State Ministry of Basic and Secondary Education conducts a variety of examinations designed to ensure that educational standards are maintained across all schools in the state. These examinations assess student learning outcomes, support continuous improvement, and certify learners’ readiness for the next stage of education.`,

  exams: [
    {
      id: 1,
      name: "Basic Education Certificate Examination (BECE)",
      description:
        "The BECE is conducted for students completing their Junior Secondary School education. It serves as a transition assessment into Senior Secondary School.",
      types: [
        { label: "Public", link: "https://kadunaexaminations.kssqaa.org/" },
        { label: "Private", link: "https://kadunaexaminations.kssqaa.org/" },
      ],
    },
    {
      id: 2,
      name: "Basic Arabic & Islamic Certificate Examination (BAICE)",
      description:
        "The BAICE examination evaluates proficiency in Arabic and Islamic studies, offering students a pathway to advanced religious education.",
      types: [
        { label: "Public", link: "https://kadunaexaminations.kssqaa.org/" },
        { label: "Private", link: "https://kadunaexaminations.kssqaa.org/" },
      ],
    },
    {
      id: 3,
      name: "Qualifying Examination (QE)",
      description:
        "The Qualifying Examination is an entry assessment for candidates seeking admission into various specialized schools across kssqaa State.",
      types: [
        { label: "Public", link: "https://kadunaexaminations.kssqaa.org/" },
        { label: "Private", link: "https://kadunaexaminations.kssqaa.org/" },
      ],
    },
    {
      id: 4,
      name: "Senior Arabic & Islamic Qualifying Examination (SAIQE)",
      description:
        "The SAIQE examination is for students advancing into higher Arabic and Islamic educational institutions, assessing advanced knowledge and understanding.",
      types: [
        { label: "Public", link: "https://kadunaexaminations.kssqaa.org/" },
        { label: "Private", link: "https://kadunaexaminations.kssqaa.org/" },
      ],
    },
  ],
});

</script>

<template>
  <Layout>
    <!-- Hero Section -->
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

    <!-- Overview -->
    <section class="py-5 px-3">
        <div data-aos="fade-up">
          <h3 class="fw-bold text-primary fs-3">{{ hero.h3.first }}</h3>
          <div class="short-line bg-primary mb-4"></div>
          <p class="text-muted lead" style="font-size: 15px; line-height: 2.5rem;">
            {{ hero.description }}
          </p>
        </div>
    </section>

    <!-- Exam Cards Section -->
    <section class="pb-5 bg-light py-4 px-3">
        <h3 class="fw-bold text-primary fs-3">{{ hero.h3.second }}</h3>
        <div class="short-line bg-primary mb-4"></div>

        <BRow class="gy-4">
          <BCol
            v-for="exam in hero.exams"
            :key="exam.id"
            lg="6"
            md="6"
            sm="12"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="200 * exam.id"
          >
            <div class="card h-100 shadow-sm border-0 hover-card">
              <div class="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 class="fw-bold text-primary text-uppercase mb-3 fs-6" style="font-size: 13px; line-height: 1.6rem;">{{ exam.name }}</h5>
                  <p class="text-muted mb-3" style="font-size: 13px; line-height: 1.6rem;">
                    {{ exam.description }}
                  </p>
                </div>

                <!-- Exam Type Links -->
                <div class="d-flex flex-wrap gap-2 mt-2">
                  <a
                    :href="type?.link"
                    target="_blank"
                    v-for="(type, index) in exam.types"
                    :key="index"
                    class="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
                  >
                    {{ type.label }}
                </a>
                </div>
              </div>
            </div>
          </BCol>
        </BRow>
    </section>
  </Layout>
</template>

<style scoped>
.short-line {
  width: 60px;
  height: 4px;
  border-radius: px;
}

.hover-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

@media (max-width: 767px) {
  section {
    padding: 2rem 1rem !important;
  }
  h1 {
    font-size: 1.8rem !important;
  }
  .card-body {
    padding: 1.5rem !important;
  }
}
</style>
