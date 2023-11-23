<template>
  <div>
    <h1>User layout</h1>
    <header />
    <brands />
    <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
    <category_brands />
    <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
    <headphone />
    <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/headers/Header.vue";
import brands from "@/components/Brands/brands.vue";
import category_brands from "@/components/Category_brands/category_brands.vue";
import headphone from "@/components/Headphone/headphone.vue";
import Carusel from "@/components/cards/Carusel.vue";
</script>

<style scoped></style>
