<script setup>
import Layout from "@/components/home/layout.vue";
import { reactive } from "vue";

const pdfFile = "/edumonitoring-guide.pdf";
const apkFile = "/edumonitor.apk"
const hero = reactive({
  edu: {
    title: "Edu Monitoring",
    second: "Welcome to the EDU Monitoring System Guide",
  },
  image: new URL("@/assets/img/general/image4.jpeg", import.meta.url).href,
  title:
    "This page provides step-by-step guidance to help you understand and navigate the EDU Monitoring System.",
  subtitle: "You can choose how to access the guide:",
  more1:
    "Take a moment to go through either option so you can get the best experience using the EDU Monitoring System.",
  more2: "You can download the app from the link below.",
  step1:
    "1. Click the link below to download the full guide document for offline use.",
  step2:
    "2. Click the play button to view a short video tutorial on how the system works.",
});
</script>

<template>
  <Layout>
    <!-- HERO SECTION -->
    <section class="position-relative py-5 d-flex align-items-center mt-5">
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        :style="{
          backgroundImage: `url(${hero?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="position-absolute w-100 h-100 bg-dark bg-opacity-50"></div>
      </div>

      <div class="position-relative container text-center mt-5">
        <h1 class="fs-1 text-white fw-bold mb-4 text-uppercase">
          {{ hero?.edu?.title }}
        </h1>
      </div>
    </section>

    <!-- MAIN CONTENT -->
    <BCard class="py-5 px-3">
        <BRow class="align-items-start justify-content-between g-5">
          <!-- TEXT CONTENT -->
          <BCol md="6">
            <div class="content-box p-3">
              <h4 class="fw-bold text-primary mb-3 text-capitalize">
                {{ hero.edu.second }}
              </h4>

              <p class="text-muted">{{ hero.title }}</p>
              <p class="fw-semibold">{{ hero.subtitle }}</p>

              <div class="steps-box p-3 bg-light border rounded-3">
                <p class="mb-2">{{ hero.step1 }}</p>
                <a :href="pdfFile" target="_blank">
                  <BButton
                    variant="primary"
                    class="mt-3 mb-3 fw-semibold px-4 py-2"
                  >
                    <i class="ri-open-arm-fill me-2 fs-5"></i>
                    Open PDF Guide
                  </BButton>
                </a>

                <p class="mb-0">{{ hero.step2 }}</p>
              </div>

              <p class="mt-4 text-muted">{{ hero.more1 }}</p>
              <p class="text-muted">{{ hero.more2 }}</p>

              <!-- DOWNLOAD BUTTON -->
              <a :href="apkFile"  rel="noopener noreferrer">
                <BButton variant="primary" class="mt-3 fw-semibold px-4 py-2">
                  <i class="ri-download-cloud-2-fill me-2 fs-5"></i>
                  Download the App
                </BButton>
              </a>
            </div>
          </BCol>

          <!-- VIDEO SECTION -->
          <BCol md="6">
            <div class="video-wrapper shadow-lg rounded-4 overflow-hidden">
              <video
                src="@/assets/file/edu.mp4"
                controls
                loop
                autoplay
                
                playsinline
                class="video-player"
              ></video>
            </div>
          </BCol>
        </BRow>
    </BCard>
  </Layout>
</template>

<style scoped>
/* TEXT + VIDEO */
.content-box {
  line-height: 1.8;
}

.steps-box {
  font-size: 14px;
}

.video-wrapper {
  background: #000;
}
.video-player {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 12px;
}

/* GENERAL */
p {
  font-size: 14.5px;
}

.display-4 {
  font-size: 46px;
}

@media (max-width: 767px) {
  .hero-section {
    height: 250px;
  }
  .display-4 {
    font-size: 32px;
  }
  .video-player {
    height: 250px;
  }
}
</style>
