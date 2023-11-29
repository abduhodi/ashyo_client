<template>
  <div class="flex bg-white">
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-10 transition-opacity opacity-50 lg:hidden bg-[#00111380]"
      @click="isOpen = false"
    ></div>
    <div
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      class="w-[223px] bg-color1 pt-[70px] inset-y-0 fixed left-0 z-10 overflow-y-auto duration-300 lg:translate-x-0 lg:static"
    >
      <span v-for="(item, index) in menu" :key="index">
        <router-link
          :class="{ 'router-link-active': $route.meta.child === item.keys }"
          class="sidebar flex justify-start gap-4 items-center font-normal text-white text-[20px] pl-[30px] py-[15px] select-none transition-all duration-200"
          :to="item.path"
          ><Icon type="mdi" :path="item.icon" class="text-[20px]"></Icon>
          {{ item.label }}</router-link
        >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "@jamescoyle/vue-icon";
import { computed, ref } from "vue";
import { useSideBar } from "@/hooks/UseSidebar.ts";

const isOpen = useSideBar();
const toggleSideBar = () => {
  isOpen.value = !isOpen.value;
};

const props = defineProps({
  menu: Array,
});

defineExpose({ toggleSideBar });
</script>

<style lang="scss" scoped>
.router-link-active {
  background: #f5fccd;
  color: #12486b;
}

//:class="index === 0 ? 'border-t border-color_bg' : ''" ;
</style>
