<template>
  <div class="mx-auto mt-5">
    <el-carousel trigger="click" indicator-position="outside" height="450px">
      <el-carousel-item
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          gap: 20px;
        "
      >
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import ProductCard from "@/components/cards/ProductCard.vue";
</script>

<style scoped></style>
