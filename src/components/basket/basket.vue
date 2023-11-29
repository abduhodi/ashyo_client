<template>
  <div class="flex gap-8">
    <div class="grid gap-12 w-[850px]">
      <div class="grid gap-8">
        <div
          class="flex h-[170px]"
          v-for="(i, index) in order"
          :key="index"
          style="gap: 31px"
        >
          <img class="w-[200px] bg-[#EBEFF3] rounded" :src="i.image" alt="" />
          <div class="flex-col w-[900px] h-[145px]">
            <div class="flex gap-[200px] items-start">
              <h1 class="text-xl">{{ i.text }}</h1>
              <h1 class="text-xl">{{ i.price }}</h1>
            </div>
            <div class="flex">
              <div class="flex" style="gap: 10px">
                <div
                  class="w-[52px] h-[40px] mt-[80px] bg-[#EBEFF3] rounded justify-center flex items-center"
                >
                  <button>
                    <img src="src/assets/images/payment/heart.svg" alt="" />
                  </button>
                </div>
                <div
                  class="w-[52px] h-[40px] mt-[80px] bg-[#EBEFF3] rounded justify-center flex items-center"
                >
                  <button>
                    <img src="src/assets/images/payment/delete.svg" alt="" />
                  </button>
                </div>
              </div>
              <div class="flex">
                <div
                  class="w-[52px] h-[40px] mt-[80px] ml-[300px] bg-[#EBEFF3] rounded justify-center flex items-center"
                >
                  <button>
                    <img
                      src="src/assets/images/payment/math-minus.png"
                      alt=""
                    />
                  </button>
                </div>
                <h1
                  class="text-[28px] font-[400] mt-[80px] ml-[60px] mx-3 text-[#697B92]"
                >
                  {{ i.count }}
                </h1>
                <div
                  class="w-[52px] h-[40px] mt-[80px] ml-[50px] bg-[#EBEFF3] rounded justify-center flex items-center"
                >
                  <button>
                    <img src="src/assets/images/payment/math-plus.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[340px] h-[280px] ml-[40px] mt-[-55px] bg-[#EBEFF3] p-3">
      <h1 class="text-[18px] font-bold pt-10 text-center">
        Sizning haridingiz
      </h1>
      <div class="flex flex-col w-full h-[290px] mt-5 gap-5">
        <div class="flex justify-between gap-[80px]">
          <h1>Yetkazib berish</h1>
          <p class="font-bold">Bepul</p>
        </div>
        <div class="flex justify-between gap-[60px]">
          <h1>Jami summa:</h1>
          <p class="font-bold">12 568 000 usz</p>
        </div>
        <button
          class="w-auto h-auto top-[664px] left-[1003px] p-[17px] gap-2 rounded-md bg-[#134E9B] text-[white]"
        >
          Hoziroq sotib olish
        </button>
      </div>
    </div>
  </div>

  <h1
    class="w-[380px] h-[42px] m-[50px] text-[20px] text-[#06172D] font-bold font-[Roboto]"
  >
    Oxirgi ko’rgan mahsulotlar
  </h1>
  <div class="mx-auto mt-[40px] gap-3 flex flex-row">
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";

const order = ref([
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "../../src/assets/images/brands/phone.svg",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "../../src/assets/images/brands/phone.svg",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "../../src/assets/images/brands/phone.svg",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "../../src/assets/images/brands/phone.svg",
    count: 1,
  },
  {
    text: "Смартфон Xiaomi 12 Lite 8/128Gb ",
    price: "6 999 999 usz ",
    image: "../../src/assets/images/brands/phone.svg",
    count: 1,
  },
]);
</script>

<style scoped></style>
