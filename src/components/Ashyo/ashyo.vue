<template>
  <div class="flex flex-row">
    <div
      class="w-[374px] h-[916px] ml-[150px] mt-[70px] rounded-lg bg-[#EBEFF3]"
    >
      <div class="flex flex-col gap-[70px] m-10">
        <div>
          <p
            class="w-[150px] h-[24px] font-[Roboto] text-[23px] font-bold leading-6 mb-3"
          >
            Ashyo haqida
          </p>

          <p
            class="w-[286px] h-[38px] font-[Roboto] text-[#545D6A] font-normal"
          >
            Ashyo 2022 yilda Toshkent shahrida tashkil etilgan.
          </p>
        </div>

        <div>
          <p
            class="w-[250px] h-[24px] font-bold font-[Roboto] mb-3 text-[23px]"
          >
            Muddatli to’lov
          </p>

          <p
            class="w-[286px] h-[36px] font-normal font-[Roboto] text-[#545D6A]"
          >
            Ashyoda barcha eliktronika maishiy texnikalar uchun qulay onlayn
            to’lov rejasi
          </p>
        </div>

        <div>
          <p
            class="w-[250px] h-[24px] font-bold font-[Roboto] mb-3 text-[23px]"
          >
            To‘lov usullari
          </p>

          <p
            class="w-[286px] h-[36px] font-normal font-[Roboto] text-[#545D6A]"
          >
            Siz uchun qulay usulda to’lang do’konda, Cilik, Payme orqali.
          </p>
        </div>

        <div>
          <p
            class="w-[250px] h-[24px] font-bold font-[Roboto] mb-3 text-[23px]"
          >
            Yetkazib berish
          </p>

          <p
            class="w-[286px] h-[36px] font-normal font-[Roboto] text-[#545D6A]"
          >
            Ashyoda tovarlarni yetkazib berish shartlari.
          </p>
        </div>

        <div>
          <p
            class="w-[250px] h-[24px] font-bold font-[Roboto] text-[23px] mb-3"
          >
            Tavorlarga kafolat
          </p>

          <p
            class="w-[286px] h-[36px] font-normal font-[Roboto] text-[#545D6A]"
          >
            Ashyo onlayn do’konining kafolati va qaytarilish haqida hamma
            narsani bilib oling
          </p>
        </div>

        <div>
          <p
            class="w-[250px] h-[24px] font-bold font-[Roboto] mb-3 text-[23px]"
          >
            Yordam
          </p>

          <p
            class="w-[286px] h-[36px] font-normal font-[Roboto] text-[#545D6A]"
          >
            Tushunmagan narsalaringiz bo’lsa savollaringizni bering
          </p>
        </div>
      </div>
    </div>

    <div>
      <h1
        class="w-[220px] h-[36px] m-[50px] mt-[70px] text-3xl text-[#06172D] font-bold font-[Roboto]"
      >
        Ashyo haqida
      </h1>

      <div
        class="w-[776px] h-[300px] mt-[50px] m-[30px] bg-[#6F73EE] rounded-lg"
      >
        <p
          class="flex justify-center pt-[80px] text-9xl text-[white] font-[Roboto] font-bold"
        >
          Ashyo
        </p>
      </div>

      <p class="w-[742px] h-[338px] text-[#515D6C] mt-[50px] ml-[45px] text-xl">
        Ashyo - bozor narhid maishy texnika va electronics dukonlari
        qurilmalari. 2 oydan davomid mizhozlarga keng assortimentdagi
        mahsulotlarni, kafolatli va benson hizmatni taklif etib keladi.<br /><br />

        Ashyo 2022 yilda Toshkent shahrida tashkil etylgan. Bugungi kunga qadar
        jami poytaxtda va viloyatlarda 26 that dukon faoliyat ko'rsatmoqda.<br /><br />

        Siz tovarlarni har kanday kulay usulda sotib olishingiz mumkin: tarmoq
        dukonlarida yoki website. Maishy uchun texnikasi onlayn b'lib t'lov
        rezhashi mavjud. Ruyhatdan utish uchun zarur bulgan huzhzhat - bu
        pasport.<br /><br />

        Yuridik shahslar uchun pul o'tkazish yo'li bilan, eng muximi -
        qo'shimcha to'lovlarsiz sotib olish mumkin.
      </p>
      <div class="flex flex-row">
        <svg-icon
          type="mdi"
          :path="mdiPrinterOutline"
          class="absolute m-[40px] mt-[50px]"
        ></svg-icon>
        <svg-icon
          type="mdi"
          :path="mdiShareVariantOutline"
          class="absolute ml-[80px] mt-[50px]"
        ></svg-icon>
      </div>
    </div>
  </div>

  <div>
    <h1
      class="flex w-[379px] h-[42px] text-2xl ml-[145px] mt-4 font-[Roboto] font-bold text-[black]"
    >
      Oxirgi ko’rgan mahsulotlar
    </h1>

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
          <product-card />
          <product-card />
          <product-card />
          <product-card />
          <product-card />
          <product-card />
          <product-card />
          <product-card />
          <product-card />
          <product-card />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/cards/ProductCard.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPrinterOutline, mdiShareVariantOutline } from "@mdi/js";
</script>

<style lang="scss" scoped></style>
