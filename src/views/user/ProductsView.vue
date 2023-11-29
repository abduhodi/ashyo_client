<template>
  <div class="w-full flex gap-5 items-start">
    <div class="w-[25%] bg-[#EBEFF3] p-5 rounded-lg">
      <div class="">
        <h2 class="mb-3 font-medium">Narx [so'm]</h2>
        <div class="flex justify-between gap-2">
          <div class="w-1/2">
            <p>dan</p>
            <input
              type="number"
              class="w-full border-none rounded-lg bg-white text-black outline-none px-2 py-1"
              v-model="min"
            />
          </div>
          <div class="w-1/2">
            <p>gacha</p>
            <input
              type="number"
              class="w-full border-none rounded-lg bg-white text-black outline-none px-2 py-1"
              v-model="max"
            />
          </div>
        </div>
        <el-slider v-model="value" range :max="1000" :show-tooltip="false" />
      </div>
    </div>
    <div class="w-4/5">
      <div class="w-full flex flex-wrap gap-5 items-start justify-between">
        <product-card v-for="item in 10" :key="item" class="m" />
      </div>
      <div class="my-10">
        <vue-awesome-paginate
          :total-items="50"
          v-model="currentPage"
          :items-per-page="5"
          :max-pages-shown="2"
          paginate-buttons-class="btn"
          active-page-class="btn-active"
          back-button-class="back-btn"
          next-button-class="next-btn"
          prevButtonContent="Back"
          nextButtonContent="Next"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/cards/ProductCard.vue";
import { ref, watch } from "vue";
const currentPage = ref(1);
const value = ref([0, 1000]);
const min = ref(0);
const max = ref(1000);
watch(value, (val) => {
  console.log(val);
  if (val[0] > val[1]) {
    min.value = val[1];
    max.value = val[0];
  } else {
    min.value = val[0];
    max.value = val[1];
  }
});
</script>

<style scoped></style>
