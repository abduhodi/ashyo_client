<template>
  <div>
    <h1>Admin PAge</h1>
    <carusel :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
    <vue-awesome-paginate
      :total-items="50"
      v-model="currentPage"
      :items-per-page="5"
      :max-pages-shown="2"
      paginate-buttons-class="btn"
      active-page-class="btn-active"
      back-button-class="back-btn"
      next-button-class="next-btn"
      prevButtonContent="Back"
      nextButtonContent="Next"
    />
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import Carusel from "@/components/cards/Carusel.vue";
import { ref } from "vue";
const currentPage = ref(1);
</script>

<style scoped></style>
