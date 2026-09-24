<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";
import aboutErd from "@/assets/img/general/image7.jpeg";
const Erd = reactive({
  h3: {
    first: "SERVICES FOR PUBLIC DOMAIN EDUCATION RESOURCE DEPARTMENT",
  },
  staffData: [
    // {
      // id: 1,
      // images: new URL("@/assets/img/staff/cod-buzun.jpg", import.meta.url).href,
      // title: " Christiana N .Buzun",
      // postion:'Ag. Director, ERD',      
      // email: "",
      // phone: "0806758235",
      // lga: ["Kaduna South", "Sanga", "Kagarko", "Jaba"],
    // },
    {
      id: 2,
      images: new URL("@/assets/img/staff/cod-ishaku.jpg", import.meta.url).href,
      title: "Ishaya Abubakar",
      postion:'Zone 3 E.O',
      email: " abubakarishaya68@gmail.com",
      phone: "08035998412",

      lga: ["Chukun", "Kajuru", "kachia", ],
    },
    {
      id: 3,
      images: new URL("@/assets/img/staff/cod-salamatu.jpg", import.meta.url).href,
      title: "Salamatu Ibrahim Sambo ",
      postion:'Zone 5 E.O',
      email: " sibrahimsalamatu@gmail.com",
      phone: "08030480941",

      lga: ["Soba", "kauru","Makarfi","Zaria"],
    },
    {
      id: 4,
      images: new URL ("@/assets/img/staff/cod-naomi.jpg", import.meta.url).href,
      title: "Naomi Regina Danjuma",
      postion:'Zone 4 E.O',
      email: " danjumaregina2016@gmail.com",
      phone: "08160452840",

      lga: ["Igabi", "Lere", "Zangon kataf", "Jema'a"],
    },
    {
      id: 5,
      images: new URL("@/assets/img/staff/cod-sofa.jpg", import.meta.url).href,
      title: "David Yashim Sofa",
      postion:'Zone 2 E.O',
      email: "davidsofayashim@gmail.com",
      phone: "08035875573",

      lga: ["Sabon Gari", "Ikara", "Kaura", "kubau"],  
    },
    {
      id: 6,
      images: new URL("@/assets/img/staff/cod-pate.jpg", import.meta.url).href,
      title: "Pate Y. Sulaiman",
      postion:'Zone 1 E.O',
      email: "sulaimanpate98@gmail.com ",
      phone: "08036835307",

      lga: ["Kaduna North.", "B/Gwari", "Giwa","kudan"],
    },
    {
      id: 7,
      images: new URL("@/assets/img/logo.png", import.meta.url).href,
      title: "Felix Mamman",
      postion:'Zone 6 E.O',
      email: "felixmamman463@gmail.com",
      phone: "08028524788",
      lga: ["Kaduna South", "Kagarko", "Jaba","Sanga"],  

    },
  ],
  education1: [
    "Periodically, corporate publishers are invited (after every four Academic years) for submission of books & other materials for review.",
    "Individual Authors too can freely submit books for review at no specified time.",
    "The corporate publishers and the individual. Authors have specified rate to pay for the services.",
    "Subject Matter Experts/Resource persons are trained after every four years prior to General Review in order to build their capacity.",
    "Reports (summary of findings) are issued at the end of each review.",
    "At the end of every Review, the books/material that meet the laid down requirements will be listed in a book form, titled: list of Recommended Textbooks for use in schools.",
  ],
  education2: [
    "Handling matters relating to Guidance and Counselling in schools.",
    "Monitoring the Desk Officers of schools and advising them on how to handle schools guidance and counseling.",
    "Coordinate programme for guidance and counselling in schools.",
  ],
  education3: [
    "All public schools that have up to JSS3 level can register for the examination once the portal for the registration is opened.",
    "Private schools that are duly registered are eligible to register candidates on pin purchase online. This is done after a successful upload of the latest 3 consecutive years Annual Renewal.",
    "Schools are seriously warned against affiliating their candidates to other exam Centres.",
  ],
  education4: [
    "Analysis on the performance of schools in External and Internal Examinations in the State.",
  ],
  education5: [
    "This Unit prints security and non-security materials.",
    "Examination Question Papers and Answer Booklets for BECE,BAICE, SSII QE, SAIQE are printed.",
    "The Unit also does printing work for commercial purposes,i.e.for othe Ministries/Parastatals and Private Organisations/Individuals, eg. File jackets, banners, stickers etc",
  ],
  image: aboutErd,
  title: "Educational Resource Department",
  description1: `ERD COORDINATING DESK OFFICERS (CDOS) AND ASSISTANT`,
});
</script>
<template>
  <Layout>
    <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${Erd?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ Erd?.title }}
        </h1>
      </div>
    </section>

    <section class="py-5 bg-light px-3">
        <h3 class="mb-3 fw-bold text-primary fs-5"
        style="line-height: 3rem;"
        >
          {{ Erd?.h3?.first }}
        </h3>
        <div class="short-line bg-primary mb-3"></div>
        <p
          class="text-muted fw-semibold ff-secondary lead text-center"
          style="line-height: 2.5rem; font-size: 16px"
        >
          {{ Erd.description1 }}
        </p>
        <BRow>
          <BCol
            lg="4"
            md="6"
            v-for="(staff, index) in Erd?.staffData"
            :key="index"
            class="d-flex gy-3"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="200 * (index + 1)"
          >
            <BCard
              no-body
              class="h-100 w-100 d-flex flex-column staff-card border-0 shadow-sm"
            >
              <!-- Image Section -->
               <div class="overflow-hidden">
                <div class="staff-image-wrapper">
                  <img
                    :src="staff.images"
                    alt="Staff Image"
                    class="staff-image"
                  />
                </div>
              </div>

              <!-- Card Body -->
              <BCardBody class="flex-grow-1 d-flex flex-column">
                <h5 class="fw-bold text-primary mb-4 text-uppercase">{{ staff.title }}</h5>
                <p class="text-muted mb-3 small">
                  <i class="ri-seo-fill me-1 text-primary"></i>
                  {{ staff.postion }}
                </p>
                <p class="text-muted mb-3 small">
                  <i class="ri-mail-line me-1 text-primary"></i>
                  {{ staff.email }}
                </p>
                <p class="text-muted mb-3 small">
                  <i class="ri-phone-line me-1 text-primary"></i>
                  {{ staff.phone }}
                </p>

                <h6 class="fw-semibold text-dark mb-4 fs-6">Assigned LGA's</h6>
                <div class="d-flex flex-wrap gap-2">
                  <span
                    v-for="(area, idx) in staff.lga"
                    :key="idx"
                    class="badge bg-light text-muted border border-muted fw-normal px-3 py-2"
                  >
                    {{ area }}
                  </span>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
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
              <!--book-->
              <h3 class="mb-3 fw-bold text-primary fs-5">Book Review</h3>
              <div class="mt-4 mb-5">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in Erd?.education1"
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
              <!--guidance-->
              <h3 class="mb-3 fw-bold text-primary fs-5">
                Guidance, Counselling and Educational Progress.
              </h3>

              <div class="mt-4 mb-5">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in Erd?.education2"
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
              <!--Basic-->
              <h3 class="mb-3 fw-bold text-primary fs-5">
                Basic Education Certificate Examination / Basic Arabic and
                Islamic Certificate Examination (BECE/BAICE)
              </h3>

              <div class="mt-4 mb-5">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in Erd?.education3"
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
              <!--statistics-->
              <h3 class="mb-3 fw-bold text-primary fs-5">Statistics Office</h3>

              <div class="mt-4 mb-5">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in Erd?.education4"
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
              <!--printing Unit-->
              <h3 class="mb-3 fw-bold text-primary fs-5">Printing Unit</h3>

              <div class="mt-4 mb-5">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in Erd?.education5"
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

.staff-card {
  transition: all 0.4s ease-in-out;
  border-radius: px;
  overflow: hidden;
}

.staff-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.card-image-wrapper {
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.staff-card:hover .staff-image {
  transform: scale(1.08);
}

.badge {
  font-size: 0.75rem;
  border-radius: 20px;
}
.staff-image-wrapper {
  height: 220px; /* set same height for all */
  width: 100%;
  overflow: hidden;
}

.staff-image {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* keeps uniform height */
  object-position: top;   /* protects the head */
  transition: transform 0.5s ease;
}

.staff-card:hover .staff-image {
  transform: scale(1.08);
}

</style>
