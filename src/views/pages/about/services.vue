<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";
const services = reactive({
  h3: {
    first: "Overview",
    second: "Contact Us",
  },
  image: new URL("@/assets/img/general/image4.jpeg", import.meta.url).href,
  title: "Our Services",
  description1: `KSSQAA offers a comprehensive suite of services designed to elevate educational standards across Kaduna State, which includes:`,
  description3: `For more information about our services or to get involved with our initiatives, visit us at our office located within the Government College premises, Abakpa, Kaduna. Together, we can achieve and sustain the highest standards of educational quality for all.`,
  list1: [
    "Schools Registration",
    "State Examinations",
    "Students Services",
    "Communication",
    "Standardization",
    "Result Services",
    "E-Learning",
    "Complaints and Feedback",
    "Schools Directory"
  ],
  lists2: [
    "All private and public schools in kaduna  State are registered and approved through this platform.",
    "KSSQAA automates the registration and processing of State-organised examinations like the BECE.",
    "Student Transfers, placement and other services are possible and mandatory on KSSQAA as well.",
    "KSSQAA serves as a the source of verifiable information regarding education in Kaduna  State.",
    "Enforcement and regulation of standards remains one of the key services provided by this platform.",
    "KSSQAA is the one-stop-shop for educational results, certificates, transcripts and related services",
    "Registered schools have access to e-Learning platforms enabling continued studies off school environment",
    "Reachout to the education stakeholders in the state through this platform by dropping complaints and feedback",
    "KSSQAA maintains an active directory of all public and private schools in the state with related services"
      ],
  });
</script>
<template>
  <Layout>
    <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${services?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ services.title }}
        </h1>
      </div>
    </section>
    <section class="section px-3">
        <BRow class="justify-content-start">
          <BCol
            lg=""
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
          >
            <div class="mb-5">
              <h3 class="mb-3 fw-bold text-primary fs-3">
                {{ services?.h3?.first }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>
              <p
                class="text-muted mb-4 ff-secondary lead"
                style="line-height: 2.5rem; font-size: 14px"
              >
                {{ services.description1 }}
              </p>

              <div class="mt-4 p-lg-4">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in services?.list1"
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

              <h3
                class="mb-3 fw-bold text-primary fs-3"
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay="300"
              >
                {{ services?.h3?.second }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>
              <p
                class="text-muted mb-4 ff-secondary lead"
                style="line-height: 2.5rem; font-size: 14px"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
              >
                {{ services.description3 }}
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
