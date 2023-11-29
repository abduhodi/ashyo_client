export default {
  path: "/admin",
  name: "admin",
  component: () => import("@/layouts/admin/AdminLayout.vue"),
  children: [
    {
      path: "/dashboard",
      name: "admin_dashboard",
      component: () => import("@/views/admin/CategoryView.vue"),
    },
  ],
};
