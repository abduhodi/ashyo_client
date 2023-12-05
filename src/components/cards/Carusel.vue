<template>
  <div class="mx-auto mt-5">
    <carousel :items-to-show="5.5">
      <slide v-for="(items, ind) in data" :key="ind">
        <product-card :data="items" style="width: 240px" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

//@ts-ignore
import ProductCard from "@/components/cards/ProductCard.vue";
import type { IProduct } from "../../types";
import { defineProps, onMounted, ref } from "vue";

const props = defineProps<{ data: [] }>();
onMounted(() => {});
</script>

<style scoped></style>
