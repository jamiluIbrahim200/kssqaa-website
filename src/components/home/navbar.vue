<script setup>
import data from "../data";
import aboutImg from "@/assets/img/general/image7.jpeg";
import departmentImg from "@/assets/img/general/image4.jpeg";
import resoursesImg from "@/assets/img/general/image3.jpeg";
import schoolImg from "@/assets/img/general/image5.jpeg";

const about = {
  image1: aboutImg,
  image2: departmentImg,
  image3: resoursesImg,
  image4: schoolImg,
};

// Dynamic navigation data
const navigationData = [
  {
    id: "about-us",
    title: "About Us",
    image: about.image1,
    links: [
      { name: "history", label: "History" },
      { name: "services", label: "Our Services" },
      { name: 'team', label: 'Our Team' },
      { name: "mandate", label: "Mandate" },
      { name: "stakeholders", label: "Stakeholders" },
    ],
  },
  {
    id: "departments",
    title: "Departments",
    image: about.image2,
    links: [
      { name: "private", label: "Private School Department" },
      { name: "education", label: "Education Resource Department" },
      { name: "quality", label: "Quality Assurance Department" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    image: about.image3,
    links: [
      // { name: "books", label: "Recommended Text Books" },
      { name: "edu", label: "EDU Monitoring Guide" },
      // { name: 'elearning', label: 'E Learning' },
      // { name: 'learningAid', label: 'Learning Aid' },
      // { name: 'learningSupport', label: 'Learning Support' },
      // { name: 'guide', label: 'Annual Licence Renewal Guide' }
    ],
  },
  {
    id: "schools",
    title: "Schools",
    image: about.image4,
    links: [
      // { name: 'process', label: 'Registration Process' },
      { name: "validation", label: "School Re - Validation" },
    ],
  },
];

// Simple navigation items (without dropdowns)
const simpleNavItems = [
  { name: "examination", label: "Examination" },
  { name: "contact", label: "Contact Us" },
];
</script>

<template>
  <!-- FIXED header includes both topbar + navbar -->
  <header class="fixed-top bg-light shadow-lg">
    <!-- Main navbar -->
    <nav class="navbar navbar-expand-lg navbar-landing job-navbar px-3" id="navbar">
      <BContainer fluid class="">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
          <img
            :src="data?.generalData?.generalLogo"
            class="card-logo card-logo-dark"
            alt="logo dark"
            height="32"
          />
          <img
            :src="data?.generalData?.generalLogo"
            class="card-logo card-logo-light"
            alt="logo light"
            height="32"
          />
        </router-link>

        <!-- Toggle for mobile -->
        <BButton
          class="navbar-toggler py-0 fs-20 text-body"
          type="button"
          v-b-toggle.navbarSupportedContent
        >
          <i class="mdi mdi-menu"></i>
        </BButton>

        <!-- Collapsible Menu -->
        <BCollapse class="navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
            <!-- Dynamic Dropdown Menus -->
            <li
              v-for="navItem in navigationData"
              :key="navItem.id"
              class="nav-item dropdown position-static"
            >
              <a
                class="nav-link dropdown-toggle text-secondary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ navItem.title }}
              </a>

              <!-- Mega Dropdown -->
              <div class="dropdown-menu p-4 shadow-lg border-0">
                <div class="row g-4 align-items-start">
                  <!-- Left side: Image -->
                  <div class="col-md-6 position-relative">
                    <img
                      :src="navItem.image"
                      :alt="navItem.title"
                      class="img-fluid rounded"
                    />
                  </div>
                  <!-- Right side: Links -->
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li
                        v-for="link in navItem.links"
                        :key="link.name"
                        class="mb-2"
                      >
                        <router-link
                          class="dropdown-item px-0"
                          :to="{ name: link.name }"
                        >
                          {{ link.label }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <!-- Dynamic Simple Navigation Items -->
            <li
              v-for="navItem in simpleNavItems"
              :key="navItem.name"
              class="nav-item"
            >
              <router-link
                class="nav-link text-secondary"
                :to="{ name: navItem.name }"
              >
                {{ navItem.label }}
              </router-link>
            </li>
          </ul>
          <router-link :to="{ name: 'portal' }" class="me-3 ">
            <BButton variant="outline-primary" class="waves-effect waves-light fw-semibold ">
              <i class="ri-links-line align-bottom me-2 fs-6"></i>
            <span class=""> Portals </span>
            </BButton>
          </router-link>
          <!-- Proprietor Button -->
          <a
            class="btn btn-primary fw-bold fs-6"
            :href="data?.generalData?.proprietorLogin"
            target="_blank"
          >
            <i class="ri-user-3-line align-bottom me-2 fs-6"></i>
            <span>Proprietors Login</span>
          </a>
        </BCollapse>
      </BContainer>
    </nav>
  </header>
</template>
<style>
.textSize {
  font-size: 14px;
}

@media (min-width: 576px) {
  .dropdown:hover > .dropdown-menu {
    display: block;
    margin-top: 0;
  }
  .navbar .dropdown:hover > .nav-link::after {
    transform: rotate(180deg);
  }
}
</style>
