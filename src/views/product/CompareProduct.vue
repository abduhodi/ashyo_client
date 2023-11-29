<template>
  <div class="container">
    <h3 class="text-[#06172D] font-[Roboto] font-bold text-[32px] mb-10">
      Mahsulotlarni taqqoslash
    </h3>
    <div class="compareP flex flex-row gap-7">
      <ProductCard :props="product" />
      <ProductCard :props="product" />
    </div>
    <p
      class="text-[#0A1729] font-[Robot] text-[18px] font-bold underline mt-[60px] mb-10"
    >
      Mahsulot xususiyatlari
    </p>
    <div class="attributes mb-11">
      <div
        v-for="(attr, index) in getAttributes(product)"
        :key="index"
        class="w-[50%] flex flew-row justify-between"
      >
        <div
          v-if="product[attr] || product2[attr]"
          class="w-[100%] flex flew-row justify-between border border-t-0 border-l-0 border-r-0 border-dashed border-b-[#515D6C] my-2 py-1"
        >
          <p
            class="text-start w-[33%] text-[#515D6C] font-[Roboto] font-normal text-4"
          >
            {{ attr }}
          </p>
          <p
            class="text-left w-[33%] text-[#515D6C] font-[Roboto] font-normal text-4"
          >
            {{ product[attr] }}
          </p>
          <p
            class="text-start w-[33%] text-[#515D6C] font-[Roboto] font-normal text-4"
          >
            {{ product[attr] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/cards/ProductCard.vue'
import { ref, type Ref } from "vue";
import { type IProduct } from "../../types";
const product: Ref<IProduct> = ref({
  img: "",
  product_name: "",
  price: 1312,
  color: "",
  camera: 346,
  memory: 12,
});
const product2: Ref<IProduct> = ref({
  img: "",
  product_name: "",
  price: 1312,
  color: "",
  camera: 346,
  memory: 12,
});

const getAttributes = (product: IProduct) => {
  const attributes = new Set();
  for (let attr in product) {
    console.log(attr);
    attributes.add(attr);
  }
  return Array.from(attributes);
};
</script>

<style scoped></style>
