import { createRouter, createWebHistory } from "vue-router";
import Brands from "../components/Brands/brands.vue";
import Category_brands from "../components/Category_brands/category_brands.vue";
import Headphone from "../components/Headphone/headphone.vue";
import auth from "./auth/auth";
import user from "./user/user";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    auth,
    user,
    {
      path: "/headphone",
      name: "headphone",
      component: Headphone,
    },
    {
      path: "/brands",
      name: "brands",
      component: Brands,
    },
    {
      path: "/category_brands",
      name: "category_brands",
      component: Category_brands,
    },
  ],
});

export default router;
