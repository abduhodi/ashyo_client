<template>
  <div class="w-full md:h-screen min-h-screen flex select-none">
    <Sidebar class="h-full" :menu="AdminMenu"></Sidebar>
    <div class="w-full h-full flex flex-col gap-2 bg-[#E7EDF0]">
      <Header></Header>
      <div class="sm:pl-7 pl-1 pb-5 sm:pr-3 pr-1 h-full overflow-y-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/header/Sidebar.vue";
import Header from "@/components/header/Header.vue";
import {
  mdiAccount,
  mdiAccountGroup,
  mdiDoorOpen,
  mdiCog,
  mdiBookOpenBlankVariant,
  mdiSpeedometer,
  mdiStorefrontOutline,
  mdiShape,
  mdiGoogleDrive,
  mdiSale,
  mdiClipboardText,
} from "@mdi/js";

const AdminMenu = [
  {
    path: "/dashboard",
    name: "admin_dashboard",
    label: "Dashboard",
    keys: "dashboard",
    icon: mdiSpeedometer,
  },
  {
    path: "/products",
    name: "products",
    label: "Products",
    keys: "products",
    icon: mdiStorefrontOutline,
  },
  {
    path: "/category",
    name: "category",
    label: "Category",
    keys: "category",
    icon: mdiShape,
  },
  {
    path: "/models",
    name: "models",
    label: "Models",
    keys: "models",
    icon: mdiDoorOpen,
  },
  {
    path: "/brands",
    name: "brands",
    label: "Brands",
    keys: "brands",
    icon: mdiGoogleDrive,
  },
  {
    path: "/sales",
    name: "sales",
    label: "Sales",
    keys: "sales",
    icon: mdiSale,
  },
  {
    path: "/orders",
    name: "orders",
    label: "Orders",
    keys: "orders",
    icon: mdiClipboardText,
  },
  {
    path: "/profile",
    name: "profile",
    label: "Profile",
    keys: "profile",
    icon: mdiCog,
  },
];
</script>

<style lang="scss" scoped></style>
