<script>
import Layout from "@/components/home/layout.vue";
import Header from "./carousel.vue";
import About from "./about.vue";
import CoreValues from "./coreValues.vue";
import { Autoplay, Pagination } from "swiper/modules";
import NewsCard from "./newsCard.vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default {
  data() {
    return {
      Autoplay,
      Pagination,
    };
  },
  components: {
    Header,
    About,
    CoreValues,
    NewsCard,
    Layout,
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
  unmounted() {
    window.removeEventListener("scroll", this.setActiveSection);
  },
  mounted() {
    window.addEventListener("scroll", this.setActiveSection);
    let backtoTop = document.getElementById("back-to-top");

    if (backtoTop) {
      backtoTop = document.getElementById("back-to-top");
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

    window.addEventListener("scroll", function (ev) {
      ev.preventDefault();
      var navbar = document.getElementById("navbar");
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

    // filter btn
    var filterBtns = document.querySelectorAll(".filter-btns .nav-link");
    var productItems = document.querySelectorAll(".product-item");

    filterBtns.forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();

        for (var i = 0; i < filterBtns.length; i++) {
          filterBtns[i].classList.remove("active");
        }
        this.classList.add("active");

        var filter = e.target.dataset.filter;

        productItems.forEach(function (item) {
          if (filter === "all") {
            item.style.display = "block";
          } else {
            if (item.classList.contains(filter)) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          }
        });
      });
    });
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
  </Layout>
</template>
<style></style>
