<script setup>
import data from "../data";
</script>

<template>
  <section class="bg-primary position-relative px-3">
    <div class="bg-overlay bg-overlay-pattern"></div>

    <footer class="custom-footer py-5 position-relative text-white">
      <BRow class="gy-4 align-items-start">
        <!-- Column 1: Logo & Organization -->
        <BCol cols="12" lg="4">
          <div class="d-flex align-items-center mb-4">
            <img
              :src="data?.generalData?.generalLogo"
              alt="kssqaa Logo"
              height="60"
              class="rounded"
            />
            <p class="fs-6 mb-0 fw-semibold ms-2 text-white">
              <span class="mb-2">KSSQAA</span><br />
              {{ data?.generalData?.organization?.name }}
            </p>
          </div>
          <div class="d-flex align-items-center">
            <!-- <i
                :class="[
                  data?.generalData?.organization?.website?.icon,
                  'text-success me-2 fs-5',
                ]"
              ></i> -->
            <span class="text-white small mb-5">
              {{ data?.generalData?.organization?.website?.text }}
            </span>
          </div>
        </BCol>

        <!-- Column 2: Reach Us -->
        <BCol cols="12" lg="4">
          <div
            v-for="(linkGroup, index) in data?.generalData?.links"
            :key="index"
            class="mb-4"
          >
            <h5 class="text-white fw-semibold mb-4">{{ linkGroup.title }}</h5>
            <div>
              <p
                v-for="(item, idx) in linkGroup.items"
                :key="idx"
                class="d-flex align-items-center mb-4"
              >
                <i :class="[item.icon, 'text-success me-2 fs-6 ']"></i>
                <span class="text-white small">{{ item.text }}</span>
              </p>
            </div>
          </div>
        </BCol>

        <!-- Column 3: Socials -->
        <BCol cols="12" lg="4" class="text-lg-start text-center">
          <h5 class="text-white fw-semibold mb-3">
            {{ data?.generalData?.socials?.title }}
          </h5>
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
                  class="avatar-title rounded-circle d-flex align-items-center justify-content-center px-3"
                >
                  <i :class="[social.icon, 'fs-5']"></i>
                </div>
              </BLink>
            </li>
          </ul>
        </BCol>
      </BRow>

      <!-- Copyright -->
      <BRow
        class="justify-content-center text-center align-items-center mt-5 border-top border-success pt-3"
      >
        <BCol>
          <p class="copy-rights mb-0 text-white small mb-4">
            {{ data?.generalData?.copyright }}
          </p>
        </BCol>
          <a
              :href="data?.generalData?.theCodeUnit"
              target="_blank"
              rel="noopener noreferrer"
              class="text-success small"
            >
              Powered by theCodeUnit Soft Technologies
            </a>
        
      </BRow>
    </footer>
  </section>
</template>

<style scoped>
.footer-social-link .avatar-title {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;
}

.footer-social-link .avatar-title:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-3px);
}
</style>
