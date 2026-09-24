<script setup>
import bgImage from "@/assets/img/head/image3.jpg";
const portal = { image: bgImage };
const cyptoWidgets = [
  {
    id: 1,
    icon: "ri-login-circle-line",
    label: "PSD",
    url: "https://kadunasm.kssqaa.org",
    badgeColor: "primary",
  },
  {
    id: 2,
    icon: "ri-login-circle-line",
    label: "ERD",
    url: "https://kadunaems.kssqaa.org",
    badgeColor: "primary",
  },
  // {
  //   id: 3,
  //   icon: "ri-login-circle-line",
  //   label: "EMS",
  //   url: "https://www.facebook.com/share/3sHU168nKjmdegmV/?mibextid=qi2Omg",
  //   badgeColor: "primary",
  // },
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
  <div class="d-flex justify-content-center align-items-center min-vh-100 overflow-hidden">
    <BContainer fluid="lg">
      <BRow class="justify-content-center">

        <BCol xxl="8" xl="10" lg="10">
          <BCard no-body class="shadow-sm">

            <BRow class="g-0 equal-height-row">

              <!-- LEFT IMAGE -->
              <BCol lg="6" class="p-0 left-image-container">
                <div
                  class="h-100 w-100 position-relative"
                  :style="{
                    backgroundImage: `url(${portal.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                  }"
                >
                  <div class="overlay"></div>

                  <!-- TEXT ON HOVER -->
                  <div class="hover-text">
                    <h4 class="text-white fw-bold">Welcome to Portal</h4>
                    <p class="text-light">Click a button to access your examination login</p>
                  </div>
                </div>
              </BCol>

              <!-- RIGHT CARDS -->
              <BCol lg="6" class="p-3 d-flex flex-column">
                <h5 class="fw-bold mb-3 text-uppercase text-secondary">Admin Logins</h5>

                <BRow>
                  <BCol
                    v-for="item in cyptoWidgets"
                    :key="item.id"
                    md="6"
                    sm="12"
                    class="mb-3"
                  >
                    <a :href="item.url" target="_blank" class="text-decoration-none">
                      <BCard no-body class="hover-card shadow-sm h-100">
                        <BCardBody class="d-flex align-items-center">
                          <div class="avatar-sm flex-shrink-0">
                            <span :class="`avatar-title bg-light text-${item.badgeColor} rounded-circle fs-3`">
                              <i :class="item.icon"></i>
                            </span>
                          </div>
                          <div class="ms-3">
                            <p class="text-uppercase fw-semibold fs-12 text-muted mb-0">
                              {{ item.label }}
                            </p>
                          </div>
                        </BCardBody>
                      </BCard>
                    </a>
                  </BCol>
                </BRow>
              </BCol>

            </BRow>
          </BCard>
        </BCol>

      </BRow>
    </BContainer>
  </div>
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
body, html {
  overflow-x: hidden !important;
}
</style>
