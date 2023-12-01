<template>
  <div>
    <h1>Contact Page</h1>
    <Header />
  </div>

  <div class="mt-[21px] ml-[150px]">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        <span class="text-[#B6BABF] font-normal">Bosh sahifa</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/contact"
          ><span class="text-[#B6BABF] font-normal">Qayta aloqa</span></a
        ></el-breadcrumb-item
      >
      <el-breadcrumb separator="/"></el-breadcrumb>
    </el-breadcrumb>
    <div class="mt-[22px]">
      <p class="font-bold text-3xl">Qayta aloqa</p>
      <p class="text-[#545D6A] font-base font-normal mt-[16px]">
        Bizning ishimiz haqidagi fikir mulohazalaringiz bilan bo’lishing yoki
        izohlar maydonida o’zingizni qiziqtirgan <br />
        savolingizni yo’llang
      </p>
      <div class="mt-[35px] flex gap-[30px]">
        <div class="flex flex-col">
          <label
            for="name"
            id="name"
            class="text-[#848B93] text-xs ml-[10px] pb-[5px]"
            >Ism</label
          >
          <input
            type="text"
            id="name"
            class="w-[330px] h-[56px] bg-[#EBEFF3] rounded-[6px] pl-5"
          />
        </div>
        <div class="flex flex-col">
          <label
            for="surname"
            id="surname"
            class="text-[#848B93] text-xs ml-[10px] pb-[5px]"
            >Familiya</label
          >
          <input
            type="text"
            id="surname"
            class="w-[330px] h-[56px] bg-[#EBEFF3] rounded-[6px] pl-5"
          />
        </div>
      </div>
      <div class="mt-[30px] flex gap-[30px]">
        <div class="flex flex-col">
          <label
            for="phone"
            id="phone"
            class="text-[#848B93] text-xs ml-[10px] pb-[5px]"
            >Telefon raqam</label
          >
          <input
            type="text"
            id="phone"
            class="w-[330px] h-[56px] bg-[#EBEFF3] rounded-[6px] pl-5"
          />
        </div>
        <div class="flex flex-col">
          <label
            for="email"
            id="email"
            class="text-[#848B93] text-xs ml-[10px] pb-[5px]"
            >Elektron pochta</label
          >
          <input
            type="email"
            id="email"
            class="w-[330px] h-[56px] bg-[#EBEFF3] rounded-[6px] pl-5"
          />
        </div>
      </div>
      <div class="mt-[30px] flex flex-col w-[690px]">
        <label
          for="comment"
          id="comment"
          class="text-[#848B93] text-xs ml-[10px] pb-[5px]"
          >O’zingizni fikrlangizni qoldiring</label
        >
        <textarea
          name="comment"
          id="comment"
          cols="10"
          rows="6"
          class="bg-[#EBEFF3] rounded-[6px] pl-5"
        ></textarea>
      </div>
      <button
        class="w-[690px] bg-[#15509E] rounded-[6px] text-[#fff] py-[18px] mt-[30px] text-base"
      >
        Yuborish
      </button>
    </div>
  </div>
  <div
    class="relative w-full h-[450px] mt-[114px]"
    style="max-height: 450px; overflow: hidden"
  >
    <img
      src="../../assets/images/map.png"
      alt="map"
      style="width: 100%; height: auto"
    />
    <div
      class="absolute top-[13px] left-[150px] p-4 bg-white w-[455px] h-[422px]"
    >
      <div class="p-[50px]">
        <p class="text-lg font-bold">OOO “Ashyo”</p>
        <p class="text-xs mt-[20px]">
          Telefon raqam: <span class="text-base">+998 71 123 45 56</span>
        </p>
        <p class="text-xs mt-[15px]">
          Elektron pochta: <span class="text-base">ashyo@gmail.com</span>
        </p>
        <p class="text-xs mt-[15px]">Manzilimiz:</p>
        <p class="text-base mt-[10px]">
          100052, O‘zbekiston Respublikasi, Toshkent shahri, Bodomzor yo‘li
          1-tor ko‘chasi, 72
        </p>
        <p class="text-xs mt-[15px]">Ijtimoiy tarmoqlarimiz</p>
        <div class="flex gap-[6px] mt-[10px]">
          <button
            class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
          >
            <img src="../../assets/images/facebook.svg" alt="" />
          </button>
          <button
            class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
          >
            <img src="../../assets/images/youtube.svg" alt="" />
          </button>
          <button
            class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
          >
            <img src="../../assets/images/telegram.svg" alt="" />
          </button>
          <button
            class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
          >
            <img src="../../assets/images/twitter.svg" alt="" />
          </button>
          <button
            class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
          >
            <img src="../../assets/images/instagram.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="absolute top-[13px] left-[626px]">
      <select class="w-[344px] h-[64px] rounded px-4">
        <option class="" value="" selected hidden>
          <p class="m-3">Do'konlarimizni izlang</p>
        </option>

        <option value="chilonzor">Chilonzor tumani</option>
        <option value="olmazor">Olmazor tumani</option>
        <option value="shayxontohur">Shayxontohur tumani</option>
        <option value="mirzo">Mirzo Ulug'bek tumani</option>
        <option value="sergeli">Sergeli tumani</option>
        <option value="yashnobod">Yashnobod tumani</option>
        <option value="yakkasaroy">Yakkasaroy tumani</option>
        <option value="yunusobod">Yunusobod tumani</option>
        <option value="uchtepa">Uchtepa tumani</option>
      </select>
    </div>
  </div>
  <div class="flex flex-row pt-[70px] pb-[141px] gap-[130px] ml-[150px]">
    <div class="flex gap-[6px] mt-[10px] flex-col">
      <p class="text-xl font-bold">Bizning ijtimoiy tarmoqlarda</p>
      <div class="flex gap-[10px] mt-[21.5px] mb-[39.3px]">
        <button
          class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
        >
          <img src="../../assets/images/facebook.svg" alt="" />
        </button>
        <button
          class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
        >
          <img src="../../assets/images/youtube.svg" alt="" />
        </button>
        <button
          class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
        >
          <img src="../../assets/images/telegram.svg" alt="" />
        </button>
        <button
          class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
        >
          <img src="../../assets/images/twitter.svg" alt="" />
        </button>
        <button
          class="w-[44px] h-[40px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
        >
          <img src="../../assets/images/instagram.png" alt="" />
        </button>
      </div>
      <p class="text-xl font-bold">Mobil ilovani yuklab oling</p>
      <div class="flex gap-[12px] mt-[12px]">
        <button
          class="w-[188px] h-[66px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
        >
          <img src="../../assets/images/apple.svg" alt="apple" /><span
            class="text-xl font-bold ml-3"
            >App Store</span
          >
        </button>
        <button
          class="w-[188px] h-[66px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
        >
          <img src="../../assets/images/googleplay.svg" alt="apple" /><span
            class="text-xl font-bold ml-3"
            >Google Play</span
          >
        </button>
      </div>
      <p class="text-xs mt-[57px]">
        © 2022 Ashyo ro’yhatdan otgan litsenzalangan bu brend.
      </p>
    </div>
    <div class="mt-[10px]">
      <p class="text-xl font-bold mb-[18px]">Menyu</p>
      <p class="mb-[12px]">Ashyo haqida</p>
      <p class="mb-[12px]">Foydalanish shartlari</p>
      <p class="mb-[12px]">Maxfiylik va hafsizlik siyosati</p>
      <p class="mb-[12px]">
        Mahsulotlarni va tovarlarni <br />
        qaytarish siyosati
      </p>
      <p>Biz bilan aloqa</p>
    </div>
    <div class="mt-[10px]">
      <p class="text-xl font-bold mb-[18px]">Aloqa</p>
      <p class="text-2xl font-bold text-[gray] mb-[32px]">
        +998 (71) 123-45-67
      </p>
      <p class="text-base mb-[12px]">Savolingiz bormi?</p>
      <div class="" style="position: relative">
        <input
          type="search"
          placeholder=" O’zingiz qiziqtirgan savollarni bering"
          class="w-[314px] h-[54px] rounded-[6px] bg-[#EBEFF3] pl-[26px] font-normal text-xs"
          style="padding-right: 30px"
        />
        <button class="loop flex justify-center items-center">
          <svg-icon type="mdi" :path="mdiMessageOutline"></svg-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/headers/Header.vue";
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMessageOutline } from "@mdi/js";
</script>

<style scoped>
.loop {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 48px;
  border-radius: 6px;
}
</style>
