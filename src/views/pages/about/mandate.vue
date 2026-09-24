<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";
const mandate = reactive({
  h3: {
    first: "Our Core Mandate",
    second: "Contact Us",
  },
  image: new URL("@/assets/img/general/image4.jpeg", import.meta.url).href ,
  title: "Our  Mandate",
  description1: `Kaduna State School Quality Assurance Authority provides essential mandate aimed at improving educational standards across Kaduna State. Our core mandates include:`,
  // description3: `For more information about our services or to get involved with our initiatives, visit us at our office located within the Government College premises, Abakpa, Kaduna. Together, we can achieve and sustain the highest standards of educational quality for all`,
  list: [
  "Manage and maintain database of evaluation records in the state.",
  "Rank schools and publish the ranking and evaluation reports annually in electronic and print formats.",
  "Process all applications for the establishment of private schools, ensuring that all proprietors adhere to policies, laws, and guidelines on education.",
  "Recommend to the Commissioner, for approval, all requests for the establishment and issuance of certificates of consent for proposed schools.",
  "Monitor and evaluate the activities of private and public schools to ensure their contribution to the delivery of quality education.",
  "Register all private and public educational institutions according to their types and categories e.g., Nursery, Basic (Primary, Junior, and Secondary).",
  "Keep adequate statistical records of all private and public schools operating in the state.",
  "Liaise with other agencies to ensure that the environment of all registered schools is conducive and has adequate facilities for learning.",
  "Prepare and conduct the selection examinations for entry into junior and secondary schools in the state.",
  "Evaluate and approve private and public schools as test centers.",
  "Implement policies on the establishment of private schools as approved by the government.",
  "Perform any other functions as may be assigned by the Commissioner."
]
});
</script>

<template>
  <Layout>
    <!-- Hero Section -->
    <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${mandate.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ mandate.title }}
        </h1>
      </div>
    </section>

    <!-- Mandate Section -->
    <section class="section px-3">
        <BRow class="justify-content-start">
          <BCol
            lg
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
          >
            <div class="mb-5">
              <h3 class="mb-3 fw-bold text-primary fs-3">
                {{ mandate.h3.first }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>

              <p
                class="text-muted mb-4 ff-secondary lead"
                style="line-height: 2.5rem; font-size: 14px"
              >
                {{ mandate.description1 }}
              </p>

              <!-- Mandate List -->
              <div class="mt-4">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in mandate.list"
                    :key="index"
                    class="mb-4"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                  >
                    <div class="d-flex align-items-start">
                      <span
                        class="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3 shadow-sm flex-shrink-0"
                        style="
                          width: 36px;
                          height: 36px;
                          flex: 0 0 36px;
                          font-size: 14px;
                          transition: all 0.3s ease;
                        "
                      >
                        <i class="ri-check-double-line"></i>
                      </span>
                      <p
                        class="mb-0 text-muted ff-secondary lead"
                        style="line-height: 2.5rem; font-size: 14px"
                      >
                        {{ title }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Contact Section -->
              <!-- <h3
                class="mb-3 fw-bold text-primary fs-3 mt-5"
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay="300"
              >
                {{ mandate.h3.second }}
              </h3>
              <div class="short-line bg-primary mb-3"></div>

              <p
                class="text-muted mb-4 ff-secondary lead"
                style="line-height: 2.5rem; font-size: 14px"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
              >
                {{ mandate.description3 }}
              </p> -->
            </div>
          </BCol>
        </BRow>
    </section>
  </Layout>
</template>

<style scoped>
.short-line {
  width: 50px;
  height: 5px;
  border-radius: px;
}

/* Consistent hover animation for icons */
</style>
