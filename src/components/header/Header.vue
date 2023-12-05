<template>
  <div class="w-full mx-auto">
    <div class="w-full bg-[#EBEFF3]">
      <div class="w-full flex justify-between items-center container">
        <div
          class="w-full flex items-center gap-5 py-1 text-[#545D6A] font-sans text-[14px] font-normal"
        >
          <div class="flex items-center gap-2">
            <span>
              <router-link to="#">
                <svg-icon
                  type="mdi"
                  :path="mdiMapMarkerOutline"
                  class="w-[18px]"
                ></svg-icon>
              </router-link>
            </span>
            <span>
              <router-link to="#">Tashkent</router-link>
            </span>
          </div>
          <span>
            <router-link to="#">About us</router-link>
          </span>
          <span>
            <router-link to="#">Products</router-link>
          </span>
          <span>
            <router-link to="#">Contacts</router-link>
          </span>
        </div>
        <div
          class="w-full flex gap-5 justify-end items-center text-[#545D6A] font-sans text-[14px] font-normal"
        >
          <span>
            <router-link to="#">+998 (71) 123-45-67</router-link>
          </span>
          <span>
            <select name="" id="" class="bg-[#EBEFF3] outline-none">
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
            </select>
          </span>
        </div>
      </div>
    </div>
    <div class="container w-full my-6 flex justify-between">
      <div
        class="w-fit flex items-center justify-start cursor-pointer"
        @click="goto('/home')"
      >
        <img
          src="@/assets/images/logo.png"
          alt="group img"
          class="scale-150 w-[40px]"
        />
        <h1 class="font-sans text-[36px] text-[#134E9B] font-black">Ashyo</h1>
      </div>
      <div class="w-fit flex items-center justify-center gap-3">
        <div
          class="items-center justify-center bg-[#134E9B] rounded-md px-5 py-3 cursor-pointer"
          @click="toggleModal"
        >
          <button
            :class="{ 'open-modal': isModalOpen }"
            class="flex text-white"
          >
            <span v-if="isModalOpen" class="flex">Kategoriya </span>

            <span v-else class="flex">Kategoriya </span>

            <div :class="{ 'rotate-180': isModalOpen }">
              <svg-icon
                type="mdi"
                :path="mdiChevronDown"
                class="text-white"
              ></svg-icon>
            </div>
          </button>

          <div
            v-if="isModalOpen"
            class="absolute left-0 top-[130px] justify-center z-[10] w-full mx-auto flex"
          >
            <div class="container flex">
              <div class="w-1/2 bg-[#EBEFF3] py-10">
                <ul class="flex flex-col gap-1">
                  <li
                    v-for="category in store?.categories?.filter((item: any) => item?.parent_id == null)"
                    :key="category?.id"
                    class="flex gap-4 cursor-pointer hover:bg-slate-200 px-8 py-3"
                    @mouseover="getBrands(category?.id)"
                  >
                    <img :src="category?.logo" alt="icon" />
                    {{ category?.name }}
                  </li>
                </ul>
              </div>
              <div class="w-full bg-[white] px-16 py-10 border">
                <ul class="flex flex-col gap-5">
                  <!-- <p class="font-bold">Smartfonlar</p> -->
                  <li
                    v-for="attribute in store?.attributes"
                    :key="attribute.id"
                    class="flex gap-4 hover:underline"
                    @click="goto(`/brands/${attribute?.brand_id}`)"
                  >
                    {{
                      `${attribute?.brand?.name} ${attribute?.category?.name}`
                    }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <form action="#">
            <input
              type="text"
              class="border rounded-l-md bg-[#EBEFF3] w-[450px] px-5 py-3 outline-none"
              placeholder="What are you looking for?"
            />
          </form>
          <button
            class="items-center justify-center bg-[#134E9B] px-4 py-2 rounded-r-md cursor-pointer"
          >
            <svg-icon
              type="mdi"
              :path="mdiMagnify"
              class="text-white w-7 h-7"
            ></svg-icon>
          </button>
        </div>
      </div>
      <div class="w-fit flex items-center justify-end gap-3">
        <div class="flex w-full gap-3">
          <div
            class="bg-[#EBEFF3] p-3 rounded-md cursor-pointer"
            @click="goto('/comparison')"
          >
            <svg-icon
              type="mdi"
              :path="mdiScaleUnbalanced"
              class="text-[#545D6A]"
            ></svg-icon>
          </div>
          <div
            class="bg-[#EBEFF3] p-3 rounded-md cursor-pointer relative"
            @click="goto('/saved')"
          >
            <svg-icon
              type="mdi"
              :path="mdiHeartOutline"
              class="text-[#545D6A]"
            ></svg-icon>
            <span
              v-if="store?.saved?.length"
              class="bg-[red] text-white text-sm w-5 h-5 rounded-full flex justify-center items-center absolute -top-2 -right-2 z-10"
              >{{ store?.saved?.length }}</span
            >
          </div>
          <div
            class="bg-[#EBEFF3] p-3 rounded-md cursor-pointer relative"
            @click="goto('/cart')"
          >
            <svg-icon
              type="mdi"
              :path="mdiShoppingOutline"
              class="text-[#545D6A]"
            ></svg-icon>
            <span
              v-if="store?.cart?.length"
              class="bg-[red] text-white text-sm w-5 h-5 rounded-full flex justify-center items-center absolute -top-2 -right-2 z-10"
              >{{ store?.cart?.length }}</span
            >
          </div>
          <div
            class="bg-[#EBEFF3] p-3 rounded-md cursor-pointer"
            @click="goto('/profile')"
          >
            <svg-icon
              type="mdi"
              :path="mdiAccountOutline"
              class="text-[#545D6A]"
            ></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <ol class="w-full flex justify-between items-center px-2">
        <li
          v-for="item in store?.categories?.filter((item: any) => item?.parent_id == null)"
          :key="item.id"
          class="text-[#545D6A] hover:underline hover:text-black cursor-pointer"
        >
          {{ item.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import {
  mdiAccountOutline,
  mdiShoppingOutline,
  mdiHeartOutline,
  mdiScaleUnbalanced,
  mdiChevronDown,
  mdiMapMarkerOutline,
  mdiMagnify,
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { useRoute, useRouter } from "vue-router";
import { productStore } from "@/stores/product";

const store = productStore();
const route = useRoute();
const router = useRouter();

const value = ref();
const options = [{ value: "smart", label: "smart" }];
const open = ref(false);
const isModalOpen = ref(false);
const categories = ref();

onMounted(async () => {
  await Promise.all([
    store?.getSaved(),
    store?.getCart(),
    store?.getCategories(),
  ]);
});

const clicked = () => {
  open.value = !open.value;
};

const getBrands = async (id: number) => {
  await store?.getAttributes(id);
};

const goto = (route) => {
  router.push(route);
};

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.kategoriya {
  background-color: #134e9b;
}

.sub_menu {
  visibility: hidden;
  top: 45px;
  opacity: 0;
}
.open_menu:hover .sub_menu {
  top: 100px;
  opacity: 1;
  visibility: visible;
}

.open-modal {
  border-radius: 50%;
  /* background-color: #ff9900; */
  color: #fff;
}

.categories-list {
  position: absolute;
  top: 130px;
  left: 100px;
  /* width: 100%; */
  /* right: 180px; */

  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
</style>
