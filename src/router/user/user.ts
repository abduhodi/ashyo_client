export default {
  path: "/home",
  name: "main_layout",
  component: () => import("@/layouts/user/UserLayout.vue"),
  meta: {
    child: "main_layout",
    requiresAuth: false,
    requiresAdmin: false,
  },
  children: [
    {
      path: "/products",
      name: "products_view",
      component: () => import("@/views/user/ProductsView.vue"),
      meta: {
        child: "products",
        requiresAuth: false,
        requiresAdmin: false,
        children: [],
      },
    },
  ],
};
