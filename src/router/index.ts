import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth/auth";
import user from "./user/user";
import admin from "./admin/admin";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [auth, user, admin],
});

export default router;
