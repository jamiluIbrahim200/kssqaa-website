<script setup>
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/loadinga.json";

const defaultOptions2 = {
    animationData: animationData
}
</script>
<template>
    <div id="loadingOverlay" class="loading-overlay">
        <lottie class="avatar-xl" colors="primary:#121331,secondary:#08a88a" :options="defaultOptions2" :height="75"
            :width="75" />
    </div>
</template>
<style>
.loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    /* Light background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
    /* Above most elements */
}
</style>