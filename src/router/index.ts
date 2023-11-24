import { createRouter, createWebHistory } from "vue-router";
import Brands from "../components/Brands/brands.vue";
import Category_brands from "../components/Category_brands/category_brands.vue";
import Headphone from "../components/Headphone/headphone.vue";
import Payment from "../components/Payment/payment.vue";
import Ashyo from "../components/Ashyo/ashyo.vue";
import Basket from "../components/Basket/basket.vue";
import auth from "./auth/auth";
import user from "./user/user";
import admin from "./admin/admin";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    auth,
    user,
    admin,
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
    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
    {
      path: "/ashyo",
      name: "ashyo",
      component: Ashyo,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
  ],
});

export default router;
