<template>
  <div class="flex w-[100%] mb-[70px] mt-[70px] items-start justify-center">
    <div class="w-[1180px] flex gap-[100px]">
      <div class="flex-col">
        <h2 class="font-bold mb-4">Bizning ijtimoiy tarmoqlarda</h2>
        <div class="flex gap-2">
          <button class="icons">
            <Icon class="text-[#1A78F2]" type="mdi" :path="mdiFacebook"></Icon>
          </button>
          <button class="icons">
            <Icon class="text-[#FF0303]" type="mdi" :path="mdiYoutube"></Icon>
          </button>
          <button class="icons">
            <Icon class="text-green-500" type="mdi" :path="mdiWhatsapp"></Icon>
          </button>
          <button class="icons">
            <Icon class="text-[#57ADEE]" type="mdi" :path="mdiTwitter"></Icon>
          </button>
          <button class="icons">
            <Icon class="text-[#E0193E]" type="mdi" :path="mdiInstagram"></Icon>
          </button>
        </div>
        <div class="mt-4">
          <div class="font-bold mt-8 mb-2">Mobil ilovani yuklab oling</div>
          <div class="flex flex-column gap-2">
            <button
              class="w-[188px] h-[66px] bg-[#EBEFF3] rounded-lg gap-3 flex items-center justify-center"
            >
              <img
                src="../../assets/images/footer/app_store.png"
                class="w-[35px] m-[2px]"
                alt=""
              />
              <p class="font-bold">Apps Store</p>
            </button>
            <button
              class="w-[188px] h-[66px] bg-[#EBEFF3] rounded-lg gap-3 flex items-center justify-center"
            >
              <img
                src="../../assets/images/footer/play_market.png"
                class="w-[35px] m-[2px] remove.bg"
                alt=""
              />
              <p class="font-bold">Play Market</p>
            </button>
          </div>
        </div>
        <p class="pt-[60px] text-[12px] text-[gray]">
          © 2022 Ashyo ro’yxatdan otgan litsenzalangan bu brend.
        </p>
      </div>
      <div class="flex-col">
        <h1 class="font-bold mb-4">Menyu</h1>
        <h1>Ashyo haqida</h1>
        <h1>Foydalanish shartlari</h1>
        <h1>Maxfiylik va hafsizlik siyosati</h1>
        <h1>Mahsulotlarni va tovarlarni qaytarish siyosati</h1>
        <h1>Biz bilan aloqa</h1>
      </div>

      <div class="flex-col">
        <h1 class="font-bold mb-2">Aloqa</h1>
        <h1 class="font-bold mb-6 text-[24px]">+998 (71) 123-45-67</h1>
        <p>Savolingiz bormi?</p>
        <input
          type="text"
          class="mt-2 rounded-lg bg-[#ededed] w-[270px] h-[54px] outline-none font-[12px] px-[20px]"
          placeholder="O'zingiz qiztirgan savollarni bering?"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import Icon from "@jamescoyle/vue-icon";
import {
  mdiFacebook,
  mdiYoutube,
  mdiTwitter,
  mdiInstagram,
  mdiWhatsapp,
} from "@mdi/js";
</script>

<style scoped>
input::placeholder {
  font-size: 12px;
}

.icons {
  width: 40px;
  height: 40px;
  background-color: #ebeff3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
}

button:hover {
  background-color: #dadde0;
}
.fa-instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  color: white;
  width: 21.5px;
  border-radius: 30%;
}
h1 {
  padding-bottom: 6px;
}
</style>