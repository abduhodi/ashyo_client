export default {
  path: "/login",
  name: "login_page",
  component: () => import("@/views/auth/LoginView.vue"),
  meta: {
    child: "login",
    requiresAuth: false,
    requiresAdmin: false,
  },
  children: [],
};
