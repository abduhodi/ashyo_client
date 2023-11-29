<template>
  <div class="w-full flex items-center justify-center">
    <div class="flex flex-col w-[1180px] mt-[100px] text-[#00000099]">
      <div
        class="flex font-roboto text-2xl font-bold leading-10 tracking-normal text-left mb-[60px]"
      >
        Xaridlarni rasmiylashtirish
      </div>

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10"
      >
        1 Sizning malumotlariningiz
      </div>

      <div class="mb-8">
        <h1>Telefon raqam</h1>
        <input
          type="text"
          class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-[15px]"
        />
      </div>

      <div class="flex flex-row gap-[20px] text-xl">
        <div>
          <h1>Ism</h1>
          <input
            type="text"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none p-[15px]"
          />
        </div>

        <div>
          <h1>Familya</h1>
          <input
            type="text"
            class="w-[330px] h-[56px] text-xl rounded-md bg-[#EBEFF3] outline-none p-[15px]"
          />
        </div>
      </div>

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px]"
      >
        2 Buyurtmalaringiz
      </div>

      <div class="flex gap-8">
        <div class="grid gap-12 w-[850px]">
          <div class="grid gap-8">
            <div
              class="flex h-[170px]"
              v-for="(i, index) in order"
              :key="index"
              style="gap: 31px"
            >
              <img
                class="w-[200px] bg-[#EBEFF3] rounded"
                :src="i.image"
                alt=""
              />
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
                        <img
                          src="src/assets/images/payment/delete.svg"
                          alt=""
                        />
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
        <div class="w-[440px] h-[367px] ml-[40px] mt-[-55px] bg-[#EBEFF3] p-3">
          <h1 class="text-[18px] font-bold pt-10 text-center">
            Sizning haridingiz
          </h1>
          <div class="flex flex-col w-full h-[290px] mt-5 gap-5">
            <div class="flex justify-between gap-[75px]">
              <h1>2 ta mahsulot</h1>
              <p class="font-bold">6 999 999 uzs</p>
            </div>
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

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px]"
      >
        3 To‘lov usullari
      </div>

      <Payment class="ml-[-5px]" />

      <div
        class="font-roboto text-2xl font-bold leading-7 tracking-normal text-left mb-10 mt-[60px] "
      >
        4 Yetkazib berish manzilini kiriting
      </div>

      <div class="mb-8 flex flex-row gap-7">
        <div>
          <h1>Viloyat</h1>
          <select
            v-model="value"
            placeholder="Select"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none"
          >
            <option value="1">Toshkent</option>
            <option value="2">Samarkand</option>
            <option value="3">Namangan</option>
          </select>
        </div>

        <div>
          <h1>Tuman/Shahar</h1>
          <select
            v-model="value"
            placeholder="Select"
            class="w-[330px] h-[56px] rounded-md bg-[#EBEFF3] outline-none"
          >
            <option value="1">Mirabad</option>
            <option value="2">Sam</option>
            <option value="3">Chortoq</option>
          </select>
        </div>
      </div>

      <div class="flex flex-row gap-7">
        <div>
          <h1>Manzil</h1>
          <input
            type="text"
            class="rounded-md bg-[#EBEFF3] w-[500px] h-[60px] p-5 outline-none"
            placeholder="Chilonzor tumani 19-kvartal 16-dom 86-honodon"
          />
        </div>
        <div>
          <h1>Yetkazib berish vaqti</h1>
          <input
            type="text"
            class="rounded-md bg-[#EBEFF3] w-[204px] h-[60px] outline-none p-[31px]"
          />
          <svg-icon
            type="mdi"
            :path="mdiCalendarBlankOutline"
            class="absolute ml-3 mt-[-40px] "
          ></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCalendarBlankOutline } from "@mdi/js";
import { ref } from "vue";
import Payment from "../../components/Payment/payment.vue";

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
]);
</script>

<style scoped></style>
