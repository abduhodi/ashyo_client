<template>
  <div class="w-full h-[183px] mx-auto">
    <div class="flex justify-around bg-[#EBEFF3] gap-96 pl-8 pr-12">
      <div class="flex gap-8 h-[40px] items-center">
        <div class="flex gap-2">
          <svg-icon type="mdi" :path="mdiMapMarkerOutline"></svg-icon>
          <h3>Tashkent</h3>
        </div>
        <router-link to=""><h3>About Us</h3></router-link>
        <router-link to=""><h3>Products</h3></router-link>
        <router-link to=""><h3>Contacts</h3></router-link>
      </div>
      <div class="flex gap-5 items-center">
        <h3>+998 (71) 123-45-67</h3>
        <select class="bg-[#EBEFF3] border-none">
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
        </select>
      </div>
    </div>
    <div class="flex pl-32 pr-12 items-center mt-[20px]">
      <div class="relative inline-block w-[170px]">
        <img src="../../assets/images/logo.svg" alt="logo" class="" />
        <h1
          class="text-[#134E9B] text-[36px] font-black absolute left-[55px] top-[6px]"
        >
          Ashyo
        </h1>
      </div>

      <div class="mt-3 ml-[53px]">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          active-text-color="black"
          popper-effect="true"
          @select="handleSelect"
        >
          <el-sub-menu
            index="2"
            class="bg-[#134E9B] font-medium h-[48px] w-[160px] rounded-[6px]"
            text-color="black"
          >
            <template #title
              ><p class="text-[#fff] font-normal">Kategoriya</p></template
            >
            <el-sub-menu index="2-1"
              ><template #title>item one</template>
              <el-sub-menu index="2-1-1">
                <template #title>item 1</template>
                <el-menu-item index="2-1-1-1">item bir</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="2-1-2"
                >Smartfonlar va Aksasuerlar</el-menu-item
              >
              <el-menu-item index="2-1-3">item three</el-menu-item></el-sub-menu
            >
            <el-menu-item index="2-2">Smartfonlar va Aksasuerlar</el-menu-item>
            <el-menu-item index="2-3">Kiryuvish mashinalari</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="ml-[10px]" style="position: relative">
        <input
          type="search"
          placeholder="What are you looking for?"
          class="w-[518px] h-[48px] rounded-[6px] bg-[#EBEFF3] pl-[26px] font-normal"
          style="padding-right: 30px"
        />
        <button class="loop flex justify-center items-center text-[#fff]">
          <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
        </button>
      </div>
      <div class="flex gap-[15px] ml-[51px]">
        <el-badge :value="2" class="item">
          <button
            class="w-[50px] h-[48px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
          >
            <svg-icon type="mdi" :path="mdiScaleUnbalanced"></svg-icon>
          </button>
        </el-badge>
        <el-badge :value="11" class="item">
          <button
            class="w-[50px] h-[48px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
          >
            <svg-icon type="mdi" :path="mdiCardsHeartOutline"></svg-icon>
          </button>
        </el-badge>
        <el-badge :value="7" class="item">
          <button
            class="w-[50px] h-[48px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
          >
            <svg-icon type="mdi" :path="mdiShoppingOutline"></svg-icon>
          </button>
        </el-badge>
        <button
          class="w-[50px] h-[48px] flex justify-center items-center rounded-[6px] bg-[#EBEFF3]"
        >
          <svg-icon type="mdi" :path="mdiAccountOutline"></svg-icon>
        </button>
      </div>
    </div>
    <div class="list flex gap-[36px] items-center mt-[20px] ml-[155px]">
      <p>Aksiyalar</p>
      <p>Smartfonlar</p>
      <p>Noutbooklar</p>
      <p>Kondetsionerlar</p>
      <p>Telivizorlar</p>
      <p>Muzlatgichlar</p>
      <p>Kiryuvish mashinalari</p>
      <p>Telivizorlar</p>
      <p>Kiryuvish mashinalari</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiMapMarkerOutline,
  mdiMagnify,
  mdiScaleUnbalanced,
  mdiCardsHeartOutline,
  mdiShoppingOutline,
  mdiAccountOutline,
} from "@mdi/js";
import { ref } from "vue";

const activeIndex = ref("2");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.loop {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 48px;
  border-radius: 6px;
  background-color: #134e9b;
}
.el-menu-item {
  color: black;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.list p {
  color: #545d6a;
  text-align: center;

  /* Roboto/reguler16px */
  /* font-family: Roboto; */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 131.25% */
}
</style>
