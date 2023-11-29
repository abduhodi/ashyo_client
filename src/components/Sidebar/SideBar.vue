<template>
  <div
    class="w-full pr-0 py-0 overflow-y-scroll flex flex-col gap-2 justify-start bg-transparent scrollbar-hide"
  >
    <div class="w-full flex justify-center items-center">
      <img
        src="@/assets/images/verify_page_image.png"
        alt="logoImage"
        class="w-3/4 object-cover"
      />
    </div>
    <div class="pl-8">
      <SideButton
        v-for="(btn, index) in props.btns"
        :key="index"
        :text="btn.text"
        :icon_name="btn.icon_name"
        :path="btn.path"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideButton from "@/components/ui/SidebarButton.vue";
const props = defineProps({
  btns: Array,
});
</script>

<style lang="scss" scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
