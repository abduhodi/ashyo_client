<template>
  <router-link
    :to="props.path"
    class="w-full cursor-pointer flex gap-3 justify-between items-center py-2 px-4 rounded-l-full hover:bg-[#D8EDF7] group transition-all duration-200 ease-linear"
    active-class="sidebar__active"
  >
    <span class="w-1/6 text-center align-middle">
      <font-awesome-icon
        :icon="props.icon_name"
        class="active_icon text-xl text-white/80 group-hover:text-[#4D44B5] transition-all duration-200 ease-linear"
      />
    </span>
    <span
      class="w-10/12 capitalize text-lg text-white/80 font-sans font-semibold select-none group-hover:text-[#4D44B5] transition-all duration-200 ease-linear"
      >{{ props.text }}</span
    >
  </router-link>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const props = defineProps({
  icon_name: "",
  text: "",
  path: "",
});
const route = useRoute();
</script>

<style lang="scss" scoped>
.sidebar__active {
  background: #fff;
  span {
    color: #4d44b5;
    .active_icon {
      color: #4d44b5;
    }
  }
}
</style>
