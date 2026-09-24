<script setup>
const newsData =  [
{
  id: 1,
  images: new URL("@/assets/img/news/image1.jpg", import.meta.url).href,
  date: "15 Oct, 2025",
  comment: "120 views",
  title: "Commissioner’s Address on Education Transformation",
  description: `The Honourable Commissioner has reaffirmed KSSQAA's commitment to transforming basic and secondary education across Kaduna State. In his address, he highlighted the agency's focus on inclusive learning, teacher development, and modern classroom innovation, and underscored ongoing infrastructure upgrades and digital learning initiatives designed to empower every learner to thrive.`,
},
{
  id: 2,
  images: new URL("@/assets/img/news/image2.jpg", import.meta.url).href,
  date: "20 Oct, 2025",
  comment: "98 views",
  title: "Annual Education Advancement Summit Announced",
  description: `KSSQAA will host its Annual Education Advancement Summit in November 2025. The summit will bring together educators, parents, and community leaders to share innovative teaching practices, strengthen inclusivity strategies, and discuss sustainable policies aimed at improving learning outcomes across Kaduna State schools.`,
},
{
  id: 3,
  images: new URL("@/assets/img/news/image3.jpg", import.meta.url).href,
  date: "30 Oct, 2025",
  comment: "76 views",
  title: "Launch of New School Infrastructure Projects",
  description: `KSSQAA has launched new school infrastructure projects across several local government areas in Kaduna State, delivering modern classrooms, ICT laboratories, and safer learning environments. The initiative supports a shared vision of building an education system that fosters resilience, creativity, and lifelong learning for all students.`,
},

]
// Simple truncate function
const truncate = (text, length = 100) =>
  text.length > length ? text.substring(0, length) + "..." : text;
</script>

<template>
  <section class="py-5 px-3" id="blog">
        <h4
        class="fs-1 font-bold text-uppercase text-center text-secondary mb-5"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="600"
      >
        News & Update
      </h4>

      <BRow>
        <BCol
          lg="4"
          md="6"
          v-for="(news, index) in newsData"
          :key="index"
          class="d-flex mb-3 "
          data-aos="fade-up"
          data-aos-duration="600"
          :data-aos-delay="200 * (index + 1)"
        >
          <BCard no-body class="h-100 w-100 d-flex flex-column card-hover " style="cursor: pointer;">
            <BCardBody class="p-0">
                    <!-- Image Section -->
              <div class="overflow-hidden">
                <div class="staff-image-wrapper">
                  <img
                    :src="news?.images"
                    alt="Staff Image"
                    class="staff-image"
                  />
                </div>
              </div>
            </BCardBody>
            <BCardBody class="flex-grow-1 d-flex flex-column">
              <ul class="list-inline fs-14 text-muted">
                <li class="list-inline-item">
                  <i class="ri-calendar-line align-bottom me-1 text-primary"></i>
                 <span class="font-bold" style="font-size: 12px;"> {{ news.date }}</span>
                </li>
                <li class="list-inline-item">
                  <i class="ri-message-2-line align-bottom me-1 text-primary" ></i>
                 <span class="font-bold" style="font-size: 12px;"> {{ news.comment }}</span>
                </li>
              </ul>

              <p class="text-primary mb-3 fw-semibold " style="font-size: 12px;">{{ news.title }}</p>
              <p class="text-muted  lh-lg" style="font-size: 11px;">
                {{ truncate(news.description, 100) }}   click on read more
              </p>

              <div class="mt-auto">
                <router-link
                  :to="{ name: 'indexDetails', params: { id: news.id } }"
                  class="link-secondary border border-primary p-1 rounded"
                >
                <span class="" style="font-size: 12px;">Read More</span>
                  <i class="ri-arrow-right-line align-bottom ms-1"></i>
                </router-link>
              </div>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
  </section>
</template>
<style>
.academic-card {
  transition: transform 0.5s ease, box-shadow 0.3s ease;
}
.academic-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-image-wrapper {
  width: 100%;
  height: 220px; /* fixed uniform image height */
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Hover effect */
.card-hover:hover .card-image {
  transform: scale(1.08);
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.staff-image-wrapper {
  height: 240px; /* set same height for all */
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
