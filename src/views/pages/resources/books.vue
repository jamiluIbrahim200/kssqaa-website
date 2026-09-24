<script setup>
import Layout from "@/components/home/layout.vue"
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/empty-list.json";
const defaultOptions = {
  animationData: animationData,
};
</script>
<template>
 <Layout>
   <section id="section" class="section ">
    <BContainer>
      <!-- Dynamic Section Title -->
      <h4
        class="fs-3 font-bold text-uppercase text-center text-secondary"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="600"
      >
        Recommended Text Books
      </h4>

      <!-- No Results -->
      <div class="text-center">
        <BCol lg="12" class="text-center">
          <lottie
            class="img-fluid"
            colors="primary:#121331,secondary:#08a88a"
            :options="defaultOptions"
            :height="100"
            :width="150"
          />
        </BCol>
        <p class="fs-5 text-muted">Oops! No Books found at the Moment.</p>
      </div>
    
    </BContainer>
  </section>
 </Layout>
</template>

<style>
.bigger {
  font-size: 3rem;
}
</style>
