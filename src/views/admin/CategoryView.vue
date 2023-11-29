<template>
  <div>
    <h1>Hello Page</h1>
    <delete-modal ref="delete_modal"></delete-modal>
    <Table :header="header" :data="data">
      <template #body_action="{ item }">
        <span class="w-full flex justify-start items-center">
          <VAction :item="item" :item_action="delete_modal"></VAction>
        </span>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import Table from "@/components/ui/Table.vue";
import VAction from "@/components/ui/VAction.vue";
import DeleteModal from "@/views/admin/Modals/DeleteModal.vue";
import { ref } from "vue";

const delete_modal = ref();

const header = ref([
  { title: "ID", value: "id" },
  { title: "Category name", value: "name" },
  { title: "Parent category", value: "parent" },
  { title: "Action", value: "action" },
]);
const data = ref([
  {
    id: 1,
    check: true,
    name: "Smartphone",
    parent: "Elektronika",
  },
]);
</script>

<style scoped></style>
