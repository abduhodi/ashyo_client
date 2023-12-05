<template>
  <div v-if="!store?.products?.length" class="container">
    <h1 class="text-2xl font-medium w-full text-center py-16">
      There is not any product in this brand
    </h1>
  </div>
  <div v-else class="container mt-10">
    <h1 class="text-[#06172D] font-[Roboto] font-bold text-[32px] mb-10">
      {{ `${brand}` }}
    </h1>
    <div class="flex flex-wrap gap-5">
      <product-card
        v-for="(item, ind) in store?.products"
        :key="ind"
        :data="item"
      />
    </div>
  </div>
  <!-- <h1 class="container text-3xl font-medium my-14">Recently viewed Products</h1> -->
  <!-- <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" /> -->
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";
import Carusel from "@/components/cards/Carusel.vue";
import { productStore } from "@/stores/product";
import { useRoute, useRouter } from "vue-router";

const store = productStore();
const route = useRoute();
const router = useRouter();
const brand = ref();

onMounted(async () => {
  brand.value = await store?.getBrandProducts(route?.params?.id);
  watch(
    () => router.currentRoute.params,
    async () => {
      console.log(router.currentRoute.params);
      brand.value = await store?.getBrandProducts(route?.params?.id);
    }
  );
});
</script>

<style scoped></style>
