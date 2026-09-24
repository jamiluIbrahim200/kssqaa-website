<script setup>
import Layout from "@/components/home/layout.vue";
import avatar from "@/assets/img/general/image4.jpeg";
import { reactive } from "vue";
const privateImg = reactive({
  h3: {
    first: "Private School Department Activities",
  },
  staffData: [
    {
      id: 1,
      images: new URL("@/assets/img/staff/aisha-psd.jpg", import.meta.url).href,
      title: "Aisha Hassan Adamu",
      email: "hassanaisha474@gmail.com",
      phone: "0803 678 6970",
      lga: ["Kaura", "Jema'a", "Sanga", "Jaba"],
    },
    {
      id: 2,
      images: new URL("@/assets/img/staff/emily-psd.jpg", import.meta.url).href,
      title: "Emily Kamin",
      email: "kamin4real@gmail.com",
      phone: "0808 211 9719",
      lga: ["Ikara", "Kajuru", "Lere", "Kubau"],
    },
    {
      id: 3,
      images: new URL("@/assets/img/staff/shehu-psd.jpg", import.meta.url).href,
      title: "Shehu Isah",
      email: "shehuisah3333@gmail.com",
      phone: "08067720186",
      lga: ["Zaria", "Igabi"],
    },
    {
      id: 4,
      images: new URL("@/assets/img/staff/amina-psd.jpg", import.meta.url).href,
      title: "Amina Abubakar",
      email: "ameenaabubakar196@gmail.com",
      phone: "0703 046 8716",
      lga: ["Z/Kataf", "Kagarko", "Kachia", "Kauru"],
    },
    {
      id: 5,
      images: avatar,
      title: "Hassan Tanko",
      email: "tankoh770@gmail.com",
      phone: "0807 886 2155",

      lga: ["Kudan", "Makarfi", "Soba"],
    },
    {
      id: 6,
      images: new URL("@/assets/img/staff/aba-psd.jpg", import.meta.url).href,
      title: "Abba Usman",
      email: "daruabba16@gmail.com",
      phone: "08028333377",

      lga: ["B/Gwari", "Sabon Gari", "Giwa"],
    },
    {
      id: 7,
      images: new URL("@/assets/img/staff/Dalhatu-psd.jpg", import.meta.url)
        .href,
      title: "Dalhatu Abdu",
      email: "dalhatuabdu0@gmail.com",
      phone: "0903 872 2777",
      lga: ["K/South", "K/North", "Chikun"],
    },
  ],
  privateList1: [
    "Pre – Registration Inspection.",
    "Purchase of MES forms either Basic or POST Basic forms are attached with guideline (check list) process files and registrar private schools.",
    "If the school fulfills all the necessary requirements, provisional approval is issued, after six months certificate of consent follows.",
  ],
  privateList2: [
    "Re-categorization of schools & issuance of letters.",
    "Process and issuance of certificate of consent.",
    "Reconciliation between schools & community.",
    "Handles petitions of all forms.",
    "Issue queries to private schools.",
    "Letters to NAPPS/AMIS.",
    "Undertakings from proprietors.",
    "Change of school names or locations.",
    "Issuance of BECE certificate.",
    "Request for entrance examination permission.",
    "Request for PTA meetings.",
    "Request for increase of school fees.",
    "Insurance of introductory letters to banks for their services.",
  ],
  image: new URL("@/assets/img/general/image7.jpeg", import.meta.url).href,
  title: "Private School Department",
  description1: `PSD COORDINATING DESK OFFICERS (CDOS) AND ASSISTANT`,
});
</script>
<template>
  <Layout>
    <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${privateImg?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ privateImg?.title }}
        </h1>
      </div>
    </section>

    <section class="py-5 bg-light px-3">
        <h3 class="mb-3 fw-bold text-primary fs-3">
          {{ privateImg?.h3?.first }}
        </h3>
        <div class="short-line bg-primary mb-3"></div>
        <p
          class="text-muted fw-semibold ff-secondary lead text-center"
          style="line-height: 2.5rem; font-size: 16px"
        >
          {{ privateImg.description1 }}
        </p>
        <BRow>
          <BCol
            lg="4"
            md="6"
            v-for="(staff, index) in privateImg?.staffData"
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
                  <i class="ri-mail-line me-1 text-primary"></i>
                  {{ staff.email }}
                </p>
                <p class="text-muted mb-3 small">
                  <i class="ri-phone-line me-1 text-primary"></i>
                  {{ staff.phone }}
                </p>

                <h6 class="fw-semibold mb-4 fs-6">Assigned LGA's</h6>
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
              <h3 class="mb-3 fw-bold text-primary fs-3">Registration</h3>
              <div class="mt-4 mb-5">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in privateImg?.privateList1"
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

              <h3 class="mb-3 fw-bold text-primary fs-3">
                ENFORCEMENT UNIT HANDLES
              </h3>

              <div class="mt-4">
                <ul class="list-unstyled m-0 p-0">
                  <li
                    v-for="(title, index) in privateImg?.privateList2"
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
