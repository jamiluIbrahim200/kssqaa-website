<script>
import { Autoplay, Pagination } from "swiper/modules";
import Navbar from "./navbar.vue";
import Footer from "./footer.vue";
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
    Navbar,
    Footer,
    
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
  <div class="layout-wrapper landing"> 
    <Navbar class="" />
      <div class="bg-overlay bg-overlay-pattern"></div>
       <div class="space">
         <slot ></slot>
       </div>
    <Footer />

    <BButton
      variant="success"
      @click="topFunction"
      class="btn-icon landing-back-top"
      id="back-to-top"
    >
      <i class="ri-arrow-up-line"></i>
    </BButton>
   
  </div>
</template>
<style>
.space{
  margin-top: 1.3rem;
}
</style>
