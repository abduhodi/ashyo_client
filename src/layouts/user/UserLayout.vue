<template>
  <div class="">
    <Header />
    <router-view />
    <FooterVue />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/Header.vue";
import MainSlide from "@/components/ui/MainSlide.vue";
import Brands from "@/components/Brands/brands.vue";
import Category_brands from "@/components/Category_brands/category_brands.vue";
import Headphone from "@/components/Headphone/headphone.vue";
import Carusel from "@/components/cards/Carusel.vue";
import FooterVue from "@/components/footer/Footer.vue";
</script>

<style scoped></style>
