<template>
  <div v-if="!store?.cart?.length" class="container">
    <h1 class="text-2xl font-medium w-full text-center py-16">Cart is empty</h1>
  </div>
  <div v-else class="container">
    <h1 class="text-[#06172D] font-[Roboto] font-bold text-[32px] my-10">
      Cart Products
    </h1>
    <div class="flex justify-between">
      <div class="w-[70%]">
        <div class="flex w-full flex-col justify-center gap-8">
          <div
            class="flex w-full gap-10 items-center"
            v-for="(item, index) in store?.cart"
            :key="index"
          >
            <img
              class="w-[180px] bg-[#EBEFF3] p-3 rounded"
              :src="
                item?.product?.product_media?.length
                  ? item?.product?.product_media[0]?.url
                  : ''
              "
              alt=""
            />
            <div
              class="flex flex-col justify-between items-start w-full h-[115px]"
            >
              <div class="flex justify-between items-start w-full">
                <h1
                  class="text-xl hover: cursor-pointer hover:underline"
                  @click="goto(item?.product?.id)"
                >
                  {{ item?.product?.product_model?.name }}
                </h1>
                <h1 class="text-xl font-bold">{{ item?.product?.price }}</h1>
              </div>
              <div class="flex justify-between items-center w-full">
                <div class="flex gap-3">
                  <div>
                    <button
                      class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center outline-none"
                      @click="saved(item)"
                    >
                      <svg-icon
                        v-if="item?.liked"
                        type="mdi"
                        :path="mdiHeart"
                        class="text-red-600 cursor-pointer"
                      ></svg-icon>
                      <svg-icon
                        v-else
                        type="mdi"
                        :path="mdiHeartOutline"
                        class="text-[#383838] cursor-pointer"
                      ></svg-icon>
                    </button>
                  </div>
                  <div>
                    <button
                      @click="deleteCart(item?.product_id)"
                      class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center outline-none"
                    >
                      <img src="src/assets/images/payment/delete.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div class="flex gap-3 justify-end items-center">
                  <div>
                    <button
                      class="w-[52px] h-[40px] bg-[#EBEFF3] disabled:cursor-not-allowed rounded justify-center flex items-center cursor-pointer"
                      @click="minus(item?.id)"
                      :disabled="item?.quantity < 2"
                    >
                      <img
                        src="src/assets/images/payment/math-minus.png"
                        alt=""
                      />
                    </button>
                  </div>
                  <h1 class="text-[24px] font-[400] mx-3 text-[#697B92]">
                    {{ item?.quantity }}
                  </h1>
                  <div>
                    <button
                      class="w-[52px] h-[40px] bg-[#EBEFF3] rounded justify-center flex items-center cursor-pointer"
                      @click="plus(item?.id)"
                    >
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
            <p class="font-bold">{{ total }} UZS</p>
          </div>
          <button class="rounded-md bg-[#134E9B] text-[white] w-full py-2">
            Hoziroq sotib olish
          </button>
        </div>
      </div>
    </div>
  </div>

  <h1 class="container text-3xl font-medium my-10">Recently viewed Products</h1>
  <!-- <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" /> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";
import Carusel from "@/components/cards/Carusel.vue";
import { productStore } from "@/stores/product";
import { useRouter } from "vue-router";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";

const router = useRouter();

const store = productStore();

const deleteCart = async (id: number) => {
  await store.deleteCart(id);
  total.value = sum();
};

const plus = async (id: number) => {
  await store?.increaseCartItem(id);
  total.value = sum();
};

const total = ref(0);

const sum = () => {
  return store?.cart?.reduce((acc: number, item: any) => {
    acc += item?.quantity * item?.subtotal;
    return acc;
  }, 0);
};

const minus = async (id: number) => {
  await store?.decreaseCartItem(id);
  total.value = sum();
};

const goto = (id: number) => {
  router.push("products/" + id);
};

const saved = async (item: any) => {
  await store.saveProduct(item?.product_id);
  item.liked = JSON.parse(localStorage.getItem("saved"))?.includes(
    item?.product_id
  );
};

onMounted(async () => {
  // await store.lastViewed()
  await store.getCart();
  total.value = sum();
});
</script>

<style scoped></style>
