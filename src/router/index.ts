import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth/auth";
import user from "./user/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [auth, user],
});

export default router;
