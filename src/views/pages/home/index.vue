<script>
import Layout from "@/components/home/layout.vue";
import Header from "./carousel.vue";
import About from "./about.vue";
import CoreValues from "./coreValues.vue";
import NewsCard from "./newsCard.vue";

import { BModal, BButton } from "bootstrap-vue-next";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default {
  components: {
    Header,
    About,
    CoreValues,
    NewsCard,
    Layout,
    BModal,
    BButton,
  },

  data() {
    return {
      Autoplay,
      Pagination,
      modalShow2: false,
      modalTimer: null,
    };
  },

  methods: {
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },

  mounted() {
    // Show the Certificate Portal modal after 3 seconds.
    this.modalTimer = setTimeout(() => {
      this.modalShow2 = true;
    }, 2000);

    window.addEventListener("scroll", this.setActiveSection);

    // Back-to-top button
    let backtoTop = document.getElementById("back-to-top");

    if (backtoTop) {
      window.onscroll = function () {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          backtoTop.style.display = "block";
        } else {
          backtoTop.style.display = "none";
        }
      };
    }

    // Sticky navbar
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          navbar.classList.add("is-sticky");
        } else {
          navbar.classList.remove("is-sticky");
        }
      }
    });

    // Filter buttons
    const filterBtns = document.querySelectorAll(
      ".filter-btns .nav-link"
    );
    const productItems = document.querySelectorAll(".product-item");

    filterBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();

        filterBtns.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = e.currentTarget.dataset.filter;

        productItems.forEach((item) => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  },

  unmounted() {
    window.removeEventListener("scroll", this.setActiveSection);
    clearTimeout(this.modalTimer);
  },
};
</script>

<template>
  <Layout>
    <div>
      <Header />
      <About />
      <CoreValues />
      <NewsCard />
    </div>
    <BModal v-model="modalShow2" centered hide-footer title="Certificate Availability & Collection Schedule" class="v-modal-custom">
      <p class="" style="line-height: 2rem;">
        Please select an option below
        to check certificate availability or view the approved certificate
        collection schedule for your school.
      </p>
      <div class="d-flex justify-content-end gap-2">
        <BButton variant="outline-primary" to="/certificate">
          Availability
        </BButton>
        <BButton variant="primary" to="/schedule">
          Schedule
        </BButton>
      </div>
    </BModal>
  </Layout>
</template>

<style scoped>
/* Add modal-specific styling here if needed. */
</style>
