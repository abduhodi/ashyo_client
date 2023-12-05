<template>
  <div
    class="md:w-[48%] lg:w-[31.5%] xl:w-[20.2%] h-fit flex flex-col gap-4 select-none"
  >
    <div
      class="h-[250px] w-full rounded-lg bg-[#EBEFF3] flex justify-center items-center relative overflow-hidden select-none"
    >
      <div
        class="w-full h-full duration-200 cursor-pointer scale-75 hover:scale-90 flex justify-center items-center"
      >
        <img
          :src="data?.product_media[0]?.url"
          :alt="data?.product_card?.name"
          class="object-contain w-full h-full"
        />
      </div>
      <svg-icon
        v-if="data?.liked"
        type="mdi"
        :path="mdiHeart"
        class="absolute top-5 right-5 text-red-600 cursor-pointer"
        @click="setLiked(data?.id)"
      ></svg-icon>
      <svg-icon
        v-else
        type="mdi"
        :path="mdiHeartOutline"
        class="absolute top-5 right-5 text-[#545D6A] cursor-pointer"
        @click="setLiked(data?.id)"
      ></svg-icon>
      <span
        v-if="data?.sale"
        class="text-red-600 text-sm bg-white rounded-md font-medium px-3 py-1 absolute top-5 left-5"
        >Aksiyada</span
      >
    </div>
    <p
      class="text-[#545D6A] text-[14px] font-normal w-full text-start hover:cursor-pointer hover:underline"
      @click="goto(data?.id)"
    >
      {{
        `${data?.product_model?.name}, ${data?.product_info
          ?.map((item: any) => item?.value)
          ?.join(", ")}`
      }}
    </p>
    <div class="flex w-full flex-col justify-between items-end gap-[10px]">
      <div class="flex w-full justify-start items-start">
        <span class="text-[18px] font-bold text-start"
          >{{ data?.price }} UZS</span
        >
      </div>
      <div class="flex w-full justify-between items-end">
        <span
          class="text-[12px] font-normal bg-[#F02C961A] px-[10px] py-[7px] text-[#F02C96] rounded-[3px] text-start"
        >
          6 oy / {{ parseInt(data?.price / 6) }} UZS</span
        >
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
          @click="addCart(data)"
          class="bg-[#134E9B] rounded-[6px] px-[12px] py-[10px] hover:bg-[#1e5dae] cursor-pointer duration-150"
        >
          <svg-icon
            v-if="!data?.inCart"
            type="mdi"
            :path="mdiShoppingOutline"
            class="text-white w-5 h-5"
          ></svg-icon>
          <svg-icon
            v-else
            type="mdi"
            :path="mdiTrashCanOutline"
            class="text-white w-5 h-5"
          ></svg-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiScaleUnbalanced,
  mdiHeartOutline,
  mdiShoppingOutline,
  mdiHeart,
  mdiTrashCanOutline,
} from "@mdi/js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { type IProduct } from "../../types";
import { productStore } from "@/stores/product";

const store = productStore();
const router = useRouter();

const setLiked = async (id: number) => {
  await store.saveProduct(id);
};

onMounted(async () => {});

const addCart = async (item: any) => {
  if (!item.inCart) {
    await store.addCart(item?.id);
    item.inCart = true;
  } else {
    await store.deleteCart(item?.id);
    item.inCart = false;
  }
};

const goto = (id) => {
  router.push(`/products/${id}`);
};

const props = defineProps<{ data: {} }>();
</script>

<style scoped></style>
