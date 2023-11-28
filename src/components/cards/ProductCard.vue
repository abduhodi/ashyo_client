<template>
  <div class="w-[230px] h-[450px] flex flex-col gap-4 select-none">
    <div
      class="h-[320px] w-full rounded-lg bg-[#EBEFF3] flex justify-center items-center relative overflow-hidden select-none"
    >
      <div
        class="w-full h-full duration-200 cursor-pointer scale-90 hover:scale-105 flex justify-center items-center"
      >
        <img src="@/assets/images/airpods.png" alt="airpods" class="" />
      </div>
      <svg-icon
        v-if="liked"
        type="mdi"
        :path="mdiHeartOutline"
        class="absolute top-5 right-6 text-[#545D6A]"
        @click="setLiked"
      ></svg-icon>
      <svg-icon
        v-else
        type="mdi"
        :path="mdiHeart"
        class="absolute top-5 right-6 text-red-600"
        @click="setLiked"
      ></svg-icon>
    </div>
    <p class="text-[#545D6A] text-[14px] font-normal w-full">
      Смартфон Xiaomi 12 Lite 8/128Gb Қора kamera 48/68 px
    </p>
    <div class="flex justify-between items-end gap-[10px]">
      <div
        class="flex flex-col w-[150px] justify-center items-start gap-[10px]"
      >
        <span class="text-[18px] font-bold">69 999 UZS</span>
        <span
          class="text-[12px] font-normal bg-[#F02C961A] px-[10px] py-[7px] text-[#F02C96] rounded-[3px]"
        >
          6 oy / 1 200 000 UZS</span
        >
      </div>
      <div class="flex justify-center items-center gap-[10px]">
        <span
          class="border border-[#EBEFF3] rounded-[6px] px-[12px] py-[10px] hover:bg-[#f5f5f5] cursor-pointer duration-150"
        >
          <svg-icon
            type="mdi"
            :path="mdiScaleUnbalanced"
            class="text-[#545D6A] w-5 h-5"
          ></svg-icon>
        </span>
        <span
          class="bg-[#134E9B] rounded-[6px] px-[12px] py-[10px] hover:bg-[#1e5dae] cursor-pointer duration-150"
        >
          <svg-icon
            type="mdi"
            :path="mdiShoppingOutline"
            class="text-white w-5 h-5"
          ></svg-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiScaleUnbalanced,
  mdiHeartOutline,
  mdiShoppingOutline,
  mdiHeart,
} from "@mdi/js";
import { ref, defineProps } from "vue";
import { IProduct } from "../../types";
const liked = ref(false);

const setLiked = () => {
  liked.value = !liked.value;
};

const props = defineProps<IProduct>();
</script>

<style scoped></style>
