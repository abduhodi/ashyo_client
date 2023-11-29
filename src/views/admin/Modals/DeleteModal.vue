<template>
  <AppModal v-model="isOpen">
    <vee-form>
      <span class="w-full flex justify-center items-center">
        <svg-icon
          type="mdi"
          :path="mdiAlertCircleOutline"
          class="w-20 h-20 text-red-700 mb-3"
        ></svg-icon>
      </span>
      <h1
        class="text-[24px] font-bold w-full text-center mb-[20px] text-color1"
      >
        {{ del_title }}
      </h1>
      <div class="flex justify-center items-center w-full gap-3">
        <VButton
          btn_type="danger"
          :isLoading="false"
          type="button"
          class="mt-5 text-[18px] px-8"
          @click="confirm"
        >
          Delete
        </VButton>
        <VButton
          btn_type="primary"
          :isLoading="false"
          type="button"
          class="mt-5 px-8 text-[18px]"
          @click="closeDelModal"
        >
          Cancel
        </VButton>
      </div>
    </vee-form>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from "@/components/ui/app-modal.vue";
import VButton from "@/components/ui/VButton.vue";
import { ref, defineExpose } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAlertCircleOutline } from "@mdi/js";

const isOpen = ref(false);
const del_title = "Delete";

const openDelModal = () => {
  isOpen.value = true;
};

const closeDelModal = () => {
  isOpen.value = false;
};

const confirm = () => {
  isOpen.value = false;
};
defineExpose({ openDelModal });
</script>

<style scoped></style>
