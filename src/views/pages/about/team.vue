<script setup>
import { reactive } from "vue";
import Layout from "@/components/home/layout.vue";
const dg = {
  image: new URL("@/assets/img/team/image1.jpg", import.meta.url).href,
  name: "Prof. Usman Abubakar Zaria",
  title: "Director-General",
  description:
    "Prof. Usman Abubakar Zaria is the Director-General of KSSQAA, bringing a wealth of experience in educational administration and a commitment to excellence in Kaduna State's educational landscape.",
};
const team = reactive({
  h3: {
    first: "Our Team",
    description:
      "KSSQAA collaborates closely with key leadership figures whose vision, guidance, and policy direction ensure the delivery of quality education across Kaduna State.",
  },
  title: "Our Team",
  image: new URL("@/assets/img/general/image4.jpeg", import.meta.url).href,
});

const teammember = [
  {
    id: 1,
    coverImg: new URL("@/assets/img/team/image6.jpg", import.meta.url).href,
    bookmark: true,
    memberImg: "",
    nickname: "MS",
    memberName: "Christiana Buzun ",
    email:'xtybuzun@gmail.com',
    phone:'0803 608 5656',
    position: "AG, Education Resource Department",
  },
  {
    id: 2,
    coverImg: new URL("@/assets/img/team/image2.jpg", import.meta.url).href,
    bookmark: true,
    memberImg: "",
    nickname: "MS",
    memberName: "Hadiza Aliyu",
    email:'hadizaaliyujibril@gmail.com',
    phone:'0802 373 9601',
    position: "Director Admin and Finance ",
  },
  {
    id: 3,
    coverImg: new URL("@/assets/img/team/image4.jpg", import.meta.url).href,
    bookmark: true,
    memberImg: "",
    nickname: "BK",
    memberName: "Mercy Bainta Kude",
    phone:'08025025339',
    email:'mercybainta02@gmail.com ',
    position: "Director Private School Department (PSD)",
  },
  {
    id: 4,
    coverImg: new URL("@/assets/img/team/image5.jpg", import.meta.url).href,
    bookmark: true,
    memberImg: "",
    nickname: "GS",
    memberName: "Gideon Bidoli Sidi",
    email:'gdeonsidi@Gmail.com',
    phone:'08133840061',
    position: "Acting Director Quality Assurance Department (QAD)",
  },
  {
    id: 5,
    coverImg: new URL("@/assets/img/general/image5.jpeg", import.meta.url).href,
    bookmark: true,
    memberImg: "",
    nickname: "GS",
    memberName: "Halima Sadiya Abubakar ",
    email:'sadiya_abubakar@hotmail.com',
    phone:'08133106600',
    position: "Public Affairs Officer",
  },
];
</script>

<template>
  <Layout>
    <!-- Hero -->
    <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${team?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ team?.title }}
        </h1>
      </div>
    </section>

    <div class="px-3">
      <h3 class="mb-3 fw-bold text-primary fs-3 mt-5">{{ team.h3.first }}</h3>
      <div class="short-line bg-primary mb-3"></div>

      <p
        class="text-muted mb-4 ff-secondary lead"
        style="line-height: 2rem; font-size: 14px"
      >
        {{ team.h3.description }}
      </p>

      <!--dg start-->
      <div
        class="d-flex justify-content-center align-items-center py-5 overflow-hidden"
      >
        <BRow class="justify-content-center">
          <BCol xxl="8" xl="10" lg="10">
            <BCard no-body class="shadow-sm">
              <BRow class="g-0 equal-height-row">
                <!-- LEFT IMAGE -->
                <BCol lg="6" class="p-0 left-image-container">
                  <div
                    class="h-100 w-100 position-relative"
                    :style="{
                      backgroundImage: `url(${dg.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                    }"
                  ></div>
                </BCol>

                <!-- RIGHT CARDS -->

                <BCol lg="6" class="d-flex flex-column bg-white p-4">
                  <h5 class="fw-bold mb-3 text-uppercase text-secondary">
                    {{ dg?.name }}
                  </h5>
                  <p class="text-muted mb-3 small">
                    <i class="ri-seo-fill fs-6 me-1 text-primary"></i>
                    {{ dg?.title }}
                  </p>
                  <p class="text-muted mb-3 small" style="line-height: 2rem;">
                    <i class="ri-pie-chart-line fs-6 me-1 text-primary"></i>
                    {{ dg?.description }}
                  </p>
                  <!--  -->
                </BCol>
              </BRow>
            </BCard>
          </BCol>
        </BRow>
      </div>
      <!--dg end-->
      <BRow>
        <BCol
          lg="4"
          md="6"
          v-for="(staff, index) in teammember"
          :key="index"
          class="d-flex gy-3 mb-4"
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
                  :src="staff?.coverImg"
                  alt="Staff Image"
                  class="staff-image"
                />
              </div>
            </div>

            <!-- Card Body -->
            <BCardBody class="flex-grow-1 d-flex flex-column">
              <h5 class="fw-bold text-primary mb-4 text-uppercase">
                {{ staff?.memberName }}
              </h5>

              <p class="text-muted mb-3 small">
                <i class="ri-mail-line me-1 text-primary"></i>
                {{ staff.email }}
              </p>
              <p class="text-muted mb-3 small">
                <i class="ri-phone-line me-1 text-primary"></i>
                {{ staff.phone }}
              </p>
              <p class="text-black mb-3 small">
                <i class="ri-seo-fill me-1 text-primary"></i>
                <span style="line-height: 2rem;">
                  {{ staff.position }}
                </span>
              </p>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </div>
  </Layout>
</template>

<style>
.team-box {
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

/* Image always from TOP and same height */
.staff-image-wrapper {
  height: 200px;
  overflow: hidden;
}

.staff-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
/* Reduce spacing inside card */
.team-profile-img {
  margin-top: -20px; /* optional: brings profile slightly upward */
}
</style>
