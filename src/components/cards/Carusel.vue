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
        v-for="(items, ind) in products"
        :key="ind"
      >
        <product-card v-for="(item, id) in items" :key="id" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import ProductCard from "@/components/cards/ProductCard.vue";
import { IProduct } from "../../types";
import { defineProps, onMounted, ref } from "vue";

function chunkArray(inputArray: any, chunkSize: number) {
  const resultArray = [];
  for (let i = 0; i < inputArray.length; i += chunkSize) {
    resultArray.push(inputArray.slice(i, i + chunkSize));
  }
  return resultArray;
}

const props = defineProps<{
  data: number[];
}>();
const products = ref();
onMounted(() => {
  products.value = chunkArray(props.data, 5);
});
</script>

<style scoped></style>
