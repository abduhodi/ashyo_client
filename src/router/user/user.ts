export default {
  path: "/",
  name: "main_layout",
  component: () => import("@/layouts/user/UserLayout.vue"),
  meta: {
    child: "main_layout",
    requiresAuth: false,
    requiresAdmin: false,
  },
  children: [],
};
