export default {
  path: "/admin",
  name: "admin_page",
  component: () => import("@/views/admin/Admin.vue"),
  meta: {
    child: "admin",
    requiresAuth: true,
    requiresAdmin: true,
  },
  children: [],
};
