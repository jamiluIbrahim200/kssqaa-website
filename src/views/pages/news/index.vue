<template>
  <Layout>
    <div v-if="newsItem">
      <Hero :image="newsItem.images" :title="newsItem.title" />
      <Details
        :date="newsItem.date"
        :views="newsItem.comment"
        :description="newsItem.description"
      />
    </div>

    <div v-else class="text-center py-5">
      <p class="text-danger">News not found.</p>
      <router-link
        :to="{ name: 'home' }"
        class="btn btn-secondary mt-4"
      >
        <i class="ri-arrow-left-line me-2"></i> Back to News
      </router-link>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "@/components/home/layout.vue";
import Hero from "./hero.vue";
import Details from "./details.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const newsData = [
  {
    id: 1,
    images: new URL("@/assets/img/news/image1.jpg", import.meta.url).href,
    date: "15 Oct, 2025",
    comment: "120 views",
    title: "Commissioner’s Address on Education Transformation",
    description: `The Kaduna State Schools Quality Assurance Authority (KSSQAA) has reaffirmed its
    unwavering commitment to improving the quality, accessibility, and efficiency of education across
    the state. During a statewide address, the Honourable Commissioner emphasized that Kaduna State is 
    entering a new era of evidence-based educational transformation—one driven by data, strengthened 
    by accountability, and sustained through strategic reforms. He noted that KSSQAA continues to play 
    a central role in monitoring school standards, ensuring compliance with government policies, and 
    promoting safe and conducive learning environments for every child.
    
    The Commissioner highlighted key interventions currently underway, including the expansion of 
    school monitoring operations, capacity-building programs for principals and teachers, the rollout 
    of digital assessment tools, and initiatives aimed at eliminating instructional gaps. According to him,
    KSSQAA’s work is vital for restoring public trust in education delivery and ensuring that teaching 
    and learning remain aligned with global best practices. He further commended the Authority for its 
    systematic approach to strengthening inspection frameworks, enhancing school supervision, and 
    supporting community participation in quality assurance. The address concluded with a call for 
    collaboration among education stakeholders to uphold quality, equity, and transparency in every 
    school across Kaduna State.`,
  },

  {
    id: 2,
    images: new URL("@/assets/img/news/image2.jpg", import.meta.url).href,
    date: "20 Oct, 2025",
    comment: "98 views",
    title: "Annual Education Advancement Summit Announced",
    description: `The Kaduna State Schools Quality Assurance Authority (KSSQAA) has announced the
    upcoming Annual Education Advancement Summit, scheduled to hold in November 2025. The summit will 
    serve as a strategic platform where policymakers, school administrators, teachers, parents, and 
    development partners come together to evaluate progress and discuss emerging trends in education 
    quality assurance. This year’s edition will focus heavily on strengthening school inspections, 
    enhancing digital reporting systems, and improving the effectiveness of teaching and learning 
    through continuous professional development.

    According to the Authority, the summit will feature keynote sessions, panel discussions, 
    policy dialogues, and exhibitions showcasing innovative approaches to monitoring school standards.
    Stakeholders will explore topics such as data-driven decision-making, safeguarding in schools, 
    community-centered supervision, and the role of technology in ensuring credible assessments. 
    KSSQAA emphasized that the summit reflects the government’s determination to build a resilient and 
    future-ready education system—one where quality assurance is not just a procedure, but a culture 
    embedded at every level of school operations. The event is expected to produce actionable 
    recommendations that will guide reforms for the 2025/2026 academic year.`,
  },

  {
    id: 3,
    images: new URL("@/assets/img/news/image3.jpg", import.meta.url).href,
    date: "30 Oct, 2025",
    comment: "76 views",
    title: "Launch of New School Infrastructure Projects",
    description: `KSSQAA has commended the Kaduna State Government for launching a new phase of 
    school infrastructure projects across multiple local government areas. These projects form a 
    critical element of the broader education reform agenda aimed at improving learning conditions and 
    ensuring that schools comply with the minimum standards required for quality assurance. The Authority 
    reported that the new facilities—including modern classrooms, examination halls, administrative 
    blocks, science laboratories, water and sanitation points, and ICT-enabled learning spaces—will 
    significantly enhance teaching effectiveness and learner engagement.

    As part of its mandate, KSSQAA has already begun conducting baseline inspections to ensure that all 
    newly completed structures meet safety, accessibility, and quality benchmarks before they are 
    commissioned for use. The Authority stated that improved infrastructure is central to achieving 
    higher learner performance, fostering inclusivity, and promoting a secure school environment. 
    Community members, PTAs, and school leaders have expressed optimism that these investments will 
    drastically reduce overcrowding, encourage better attendance, and create a more supportive 
    atmosphere for both teachers and students. With continuous monitoring and sustained government 
    commitment, KSSQAA believes these projects mark a major step forward in delivering quality education 
    to every child in Kaduna State.`,
  },
];


const route = useRoute();
const id = Number(route.params.id);
// Find the correct news item
const newsItem = computed(() => newsData.find((n) => n.id === id));
</script>
