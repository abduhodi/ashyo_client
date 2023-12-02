<template>
  <div class="container mt-10">
    <h1 class="text-[#06172D] font-[Roboto] font-bold text-[32px] mb-10">
      Saved Products
    </h1>
    <div class="flex flex-wrap gap-5">
      <product-card v-for="item in 3" :key="item" />
    </div>
  </div>
  <h1 class="container text-3xl font-medium my-14">Recently viewed Products</h1>
  <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
</template>

<script setup lang="ts">
import ProductCard from "@/components/cards/ProductCard.vue";
import Carusel from "@/components/cards/Carusel.vue";
</script>

<style scoped></style>
