import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    auth,
    {
      path: "/",
      name: "product_single",
      component: import("../views/product/SingleView.vue"),
    },
  ],
});

export default router;
