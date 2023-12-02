<template>
  <div class="container">
    <h1 class="text-[#06172D] font-[Roboto] font-bold text-[32px] my-10">
      Cart Products
    </h1>
    <div class="flex justify-between">
      <div class="w-[70%]">
        <div class="flex w-full flex-col justify-center gap-8">
          <div
            class="flex w-full gap-10 items-center"
            v-for="(i, index) in order"
            :key="index"
          >
            <img
              class="w-[180px] bg-[#EBEFF3] p-3 rounded"
              :src="i.image"
              alt=""
            />
            <div
              class="flex flex-col justify-between items-start w-full h-[115px]"
            >
              <div class="flex justify-between items-start w-full">
                <h1 class="text-xl">{{ i.text }}</h1>
                <h1 class="text-xl font-bold">{{ i.price }}</h1>
              </div>
              <div class="flex justify-between items-center w-full">
                <div class="flex gap-3">
                  <div
                    class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                  >
                    <button>
                      <img src="src/assets/images/payment/heart.svg" alt="" />
                    </button>
                  </div>
                  <div
                    class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                  >
                    <button>
                      <img src="src/assets/images/payment/delete.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div class="flex gap-3 justify-end items-center">
                  <div
                    class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                  >
                    <button>
                      <img
                        src="src/assets/images/payment/math-minus.png"
                        alt=""
                      />
                    </button>
                  </div>
                  <h1 class="text-[24px] font-[400] mx-3 text-[#697B92]">
                    {{ i.count }}
                  </h1>
                  <div
                    class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center"
                  >
                    <button>
                      <img
                        src="src/assets/images/payment/math-plus.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[25%] h-fit bg-[#EBEFF3] p-10">
        <h1 class="text-[18px] font-bold text-center">Sizning haridingiz</h1>
        <div class="w-full mt-5">
          <div class="flex justify-between items-center my-5">
            <h1>Yetkazib berish</h1>
            <p class="font-bold">Bepul</p>
          </div>
          <div class="flex justify-between items-center mb-5">
            <h1>Jami summa:</h1>
            <p class="font-bold">12 568 000 UZS</p>
          </div>
          <button class="rounded-md bg-[#134E9B] text-[white] w-full py-2">
            Hoziroq sotib olish
          </button>
        </div>
      </div>
    </div>
  </div>

  <h1 class="container text-3xl font-medium my-10">Recently viewed Products</h1>
  <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";
import Carusel from "@/components/cards/Carusel.vue";
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
