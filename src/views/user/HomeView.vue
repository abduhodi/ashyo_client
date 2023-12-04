<template>
  <div>
    <main-slide />
    <brands class="my-[100px]" />
    <h1 class="container text-3xl font-medium mb-10">Most Popular Products</h1>
    <carusel :data="store?.products" class="mb-20" />
    <category_brands />
    <h1 class="container text-3xl font-medium my-10">Products in Sale</h1>
    <!-- <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" class="my-20" /> -->
    <headphone />
    <h1 class="container text-3xl font-medium my-10">
      Recently viewed Products
    </h1>
    <carusel :data="store?.views" />
  </div>
</template>

<script setup lang="ts">
import MainSlide from "@/components/ui/MainSlide.vue";
import category_brands from "@/components/Category_brands/category_brands.vue";
import brands from "@/components/Brands/brands.vue";
import Carusel from "@/components/cards/Carusel.vue";
import headphone from "@/components/Headphone/headphone.vue";
import { productStore } from "@/stores/product";
import { onMounted } from "vue";

const store = productStore();
onMounted(async () => {
  await Promise.all([store.getProducts(), store?.getViews()]);
});
</script>

<style scoped></style>
