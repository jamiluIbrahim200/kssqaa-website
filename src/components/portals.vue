<script setup>
import { ref } from "vue";
import aboutHero from "@/assets/video/vid5.mp4";
import data from "./data";
const hero = ref({
  bg: aboutHero,
  title: "Welcome to Portals",
});

const portals = [
  {
    id: 1,
    icon: "ri-user-line",
    label: "Proprietor's Portal",
    description: "School Proprietor’s Management Portal",
    url: "https://school.kssqaa.org/",
    badgeColor: "primary",
  },
  {
    id: 2,
    icon: "ri-group-line",
    label: "School Representative",
    description: "School Representatives’ Examination Portal",
    url: "https://kadunaexaminations.kssqaa.org/",
    badgeColor: "primary",
  },
  {
    id: 3,
    icon: "ri-file-list-3-line",
    label: "Result Checker",
    description: "Online Result Checking Portal",
    url: "https://results.kssqaa.org/",
    badgeColor: "primary",
  },
  // {
  //   id: 4,
  //   icon: "ri-login-circle-line",
  //   label: "QAD",
  //   url: "https://www.facebook.com/share/3sHU168nKjmdegmV/?mibextid=qi2Omg",
  //   badgeColor: "primary",
  // },
  // {
  //   id: 5,
  //   icon: "ri-login-circle-line",
  //   label: "LSD",
  //   url: "https://www.facebook.com/share/3sHU168nKjmdegmV/?mibextid=qi2Omg",
  //   badgeColor: "primary",
  // },
  // {
  //   id: 6,
  //   icon: "ri-login-circle-line",
  //   label: "HR",
  //   url: "https://www.facebook.com/share/3sHU168nKjmdegmV/?mibextid=qi2Omg",
  //   badgeColor: "primary",
  // },
];
</script>

<template>
  <section class="position-relative w-100 vh-100 overflow-hidden">
    <!-- Background Video -->
    <video
      class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      autoplay
      muted
      loop
      playsinline
    >
      <source :src="hero.bg" type="video/mp4" />
    </video>

    <!-- Dark Overlay -->
    <div
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"
    ></div>

    <!-- TOP BAR -->
    <div class="position-relative container pt-4 z-3">
      <div class="d-flex justify-content-between">
        <!-- Logo (Center) -->
        <router-link class="navbar-brand" to="/">
          <img
            :src="data?.generalData?.generalLogo"
            class="card-logo card-logo-dark"
            alt="logo dark"
            height="62"
          />
          <img
            :src="data?.generalData?.generalLogo"
            class="card-logo card-logo-light"
            alt="logo light"
            height="62"
          />
        </router-link>

        <!-- Social Icons (Right) -->
        <div class="d-flex gap-3 position-absolute end-0">
          <div class="text-lg-start text-center">
            <ul class="list-inline mb-0 footer-social-link">
              <li
                v-for="(social, index) in data?.generalData?.socials?.items"
                :key="index"
                class="list-inline-item mx-2"
              >
                <BLink
                  :href="social.url"
                  class="avatar-xs d-inline-block"
                  target="_blank"
                >
                  <div
                    class="avatar-title rounded-circle d-flex align-items-center text-white shadow justify-content-center px-lg-3"
                  >
                    <i :class="[social.icon, 'fs-5']"></i>
                  </div>
                </BLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- HERO TEXT -->
    <!-- <div
      class="position-relative container h-100 d-flex align-items-center justify-content-center text-center z-3"
    >
      <h1 class="text-white fw-bold display-5 text-uppercase">
        {{ hero.title }}
      </h1>
    </div> -->

    <!-- BOTTOM CARDS -->
    <div class="position-absolute bottom-0 start-0 w-100 pb-4 z-3">
      <div class="container">
        <div class="row g-3 justify-content-center">
          <BRow>
            <BCol
              v-for="item in portals"
              :key="item.id"
              lg="4"
              sm="12"
              class="mb-5 shadow-lg"
            >
              <a :href="item.url" target="_blank" class="text-decoration-none">
                <BCard
                  no-body
                  class="hover-card bg-white opacity-75 shadow-sm h-100"
                >
                  <BCardBody class="d-flex align-items-center">
                    <div class="avatar-sm flex-shrink-0">
                      <span
                        :class="`avatar-title bg-light text-${item.badgeColor} rounded-circle fs-3`"
                      >
                        <i :class="item.icon"></i>
                      </span>
                    </div>
                    <div class="ms-3">
                      <p
                        class="text-uppercase fw-semibold text-primary mb-1"
                        style="font-size: 12px"
                      >
                        {{ item.label }}
                      </p>
                      <p class="mb-0" style="font-size: 11px">
                        <span class="text-dark fw-medium">
                          {{ item.description }}
                        </span>
                      </p>
                    </div>
                  </BCardBody>
                </BCard>
              </a>
            </BCol>
          </BRow>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.equal-height-row > div {
  display: flex;
}

.left-image-container {
  min-height: 450px;
}

.left-image-container .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.hover-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  opacity: 0;
  transition: 0.4s ease;
}

.left-image-container:hover .hover-text {
  opacity: 1;
}

.hover-card {
  transition: 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

/* Prevent horizontal scroll */
body,
html {
  overflow-x: hidden !important;
}
</style>
