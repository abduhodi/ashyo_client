<template>
  <div class="container mt-14">
    <div v-if="Object.keys(store?.product || {}).length">
      <h1 class="text-[text] font-[Roboto] text-[32px] font-bold">
        {{ store?.product?.product_model?.name }}
      </h1>

      <div class="w-[100%] flex my-9 gap-8 justify-between">
        <div class="left_side w-[70%] flex flex-row justify-between">
          <div class="briefly w-[22%] h-[430px] overflow-y-scroll">
            <div
              class="briefly_box w-100 h-[120px] border rounded overflow-hidden mb-3 cursor-pointer select-none"
              v-for="(item, index) in store?.product?.product_media"
              :key="index"
              @click="changeMainImgIndex(index)"
            >
              <img
                :src="item.url"
                class="w-[100%] h-[100%]"
                alt="breiflyImges"
              />
            </div>
          </div>
          <div
            class="main_pic w-[73%] h-[430px] border rounded overflow-hidden object-cover relative select-none"
          >
            <img
              :src="getCurrentImageUrl()"
              class="w-[100%] h-[430px] bg-[#EBEFF3] transition ease-in-out duration-700"
              alt="mainImg "
            />
            <div
              @click="slide(Slide.left)"
              class="cursor-pointer left-icon w-9 h-9 absolute top-[50%] left-3 bg-white border rounded-full transform translate-y-[-50%]"
            >
              <LeftIcon class="my-[5px] mx-[5px]" />
            </div>
            <div
              @click="slide(Slide.right)"
              class="cursor-pointer right-icon w-9 h-9 absolute top-[50%] right-3 bg-white border rounded-full transform translate-y-[-50%]"
            >
              <RightIcon class="my-[5px] mx-[6px]" />
            </div>
          </div>
        </div>
        <div class="right_side w-[50%]">
          <p
            class="text-[#515D6C] font-[Roboto] text-[16px] font-normal my-9 select-none"
          >
            Narxi:
            <span
              class="text-[#06172D] font-[Roboto] text-[32px] font-bold ml-[20px]"
              >{{ store?.product?.price }}</span
            >
            <span
              class="text-[#06172D] font-[Roboto] text-[32px] font-bold ml-[20px]"
              >UZS</span
            >
          </p>
          <div class="sale">
            <div class="forMounth flex flex-col gap-2">
              <div class="priceForMounth w-100 border rounded">
                <p
                  class="py-5 text-center font-[Roboto] text-[16px] font-normal text-[#545D6A] bg-bgSingle select-none"
                >
                  Oyiga {{ parseInt(store?.product?.price / 6) }} UZS dan
                  muddatli to’lov
                </p>
              </div>
              <div class="actions flex gap-4">
                <button
                  v-if="!store?.product?.inCart"
                  @click="addCart(store?.product?.id)"
                  class="py-[18px] border-2 border-[#134E9B] rounded w-[50%] bg-white text-[#134E9B] font-normal text-4 font-[Roboto]"
                >
                  Savatga qo‘shish
                </button>
                <button
                  v-else
                  @click="gotoCart"
                  class="py-[18px] rounded w-[50%] bg-[#3AC86F] text-white font-normal text-4 font-[Roboto]"
                >
                  Savatga o'tish
                </button>
                <button
                  @click="buy(store?.product?.id)"
                  class="py-[18px] border border-[#134E9B] rounded w-[50%] bg-[#134E9B] text-white font-normal text-4 font-[Roboto]"
                >
                  Xarid qilish
                </button>
              </div>
            </div>
            <div class="more flex flex-col gap-5 mt-10 mb-14">
              <div class="delivery flex">
                <DeliveryIconVue />
                <p class="ml-4 font-[Roboto] font-normal text-4 text-[#515D6C]">
                  Yetkazib berish O’zbekiston bo’ylab
                </p>
              </div>
              <div class="shop flex">
                <ShopIcon />
                <p class="ml-4 font-[Roboto] font-normal text-4 text-[#515D6C]">
                  Do’kondi o’zidan olib ketishingiz mumkin
                </p>
              </div>
              <div class="clock flex">
                <ClockIcon />
                <p class="ml-4 font-[Roboto] font-normal text-4 text-[#515D6C]">
                  Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product_footer w-[49%]">
        <div class="link flex flex-row w-100 gap-20 mb-11">
          <h3
            @click="changeView(1)"
            :class="{ active: productAbout }"
            class="font-[Roboto] text-[18px] font-normal no-underline text-[#B6BABF] cursor-pointer"
          >
            Maxsulot xususiyatlari
          </h3>
          <h3
            @click="changeView(0)"
            :class="{ active: !productAbout }"
            class="font-[Roboto] text-[18px] font-normal no-underline text-[#B6BABF] cursor-pointer"
          >
            Mijozlarni fikrlari
          </h3>
        </div>
        <div v-if="productAbout">
          <div
            v-for="(attribute, index) in store?.product?.product_info"
            :key="index"
            class="product_attribute w-100 flex justify-between items-center border border-b-2 border-b-[#B6BABF] mb-2 pb-1 border-t-0 border-l-0 border-r-0 border-dashed"
          >
            <span class="text-4 text-[#545D6A] font-[Roboto] font-normal">{{
              attribute?.attribute?.name
            }}</span>
            <span
              class="text-4 text-[#545D6A] font-[Roboto] font-normal w-[50%]"
              >{{ attribute?.value }}</span
            >
          </div>
        </div>
        <div v-if="!productAbout">
          <div class="view_window max-h-[500px] overflow-y-auto">
            <div
              v-for="(comment, index) in store?.product?.comments"
              :key="index"
              class="flex w-100"
            >
              <div class="flex mb-10">
                <div class="avatar w-32 h-32 mr-4">
                  <img
                    :src="comment?.user_avatar"
                    alt="avatar"
                    class="object-contain w-100 h-100"
                  />
                </div>
                <div class="text">
                  <h4
                    class="text-[#06172D] font-[Roboto] text-[18px] font-normal mb-2"
                  >
                    {{ comment?.last_name }} {{ comment?.last_name }}
                  </h4>
                  <p
                    class="text-[#999999] font-[Roboto] text-3 font-light mb-2 mt-4"
                  >
                    {{ comment?.date }}
                  </p>
                  <p class="text-[#515D6C] font-[Roboto] text-4 font-normal">
                    {{ comment?.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comments"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DeliveryIconVue from "../../components/icons/DeliveryIcon.vue";
import RightIcon from "../../components/icons/RightIcon.vue";
import ClockIcon from "../../components/icons/ClockIcon.vue";
import ShopIcon from "../../components/icons/ShopIcon.vue";
import LeftIcon from "../../components/icons/LeftIcon.vue";
import type { Ref } from "vue";
import { ref, onMounted } from "vue";
import { productStore } from "@/stores/product";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const store = productStore();

const addCart = async (id: number) => {
  await store.addCart(id);
};

const gotoCart = () => {
  router.push("/cart");
};

onMounted(async () => {
  await store.getSingleProduct(route.params.id);
});

const mainImgIndex: Ref<number> = ref(0);
const productAbout: Ref<boolean> = ref(true);

const changeMainImgIndex = (index: number) => {
  mainImgIndex.value = index;
};

const getCurrentImageUrl = (): string => {
  return store?.product?.product_media[mainImgIndex.value].url;
};

const slide = (to: Slide): void => {
  const picturesLength: Ref<number> = ref(
    store?.product?.product_media?.length - 1
  );

  switch (to) {
    case Slide.left:
      if (mainImgIndex.value - 1 >= 0) --mainImgIndex.value;
      else mainImgIndex.value = picturesLength.value;
      return;
    case Slide.right:
      if (mainImgIndex.value + 1 <= picturesLength.value) ++mainImgIndex.value;
      else mainImgIndex.value = 0;
      return;
  }
};

const changeView = (index: number) => {
  if (index) productAbout.value = true;
  else productAbout.value = false;
};

enum Slide {
  "right",
  "left",
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

::-webkit-scrollbar {
  width: 0;
}

.active {
  color: #06172d;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-decoration-line: underline;
}
</style>
