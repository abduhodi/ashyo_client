export default {
  path: "/",
  name: "main_layout",
  component: () => import("@/layouts/user/UserLayout.vue"),
  meta: {
    child: "main_layout",
    requiresAuth: false,
    requiresAdmin: false,
  },
  children: [
    {
      path: "/home",
      name: "home_page",
      component: () => import("@/views/user/HomeView.vue"),
      meta: {
        child: "products",
        requiresAuth: false,
        requiresAdmin: false,
        children: [],
      },
    },
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
    {
      path: "/products/:id",
      name: "single_product_view",
      component: () => import("@/views/product/SingleView.vue"),
      meta: {
        child: "products",
        requiresAuth: false,
        requiresAdmin: false,
        children: [],
      },
    },
    {
      path: "/comparison",
      name: "product_comparison",
      component: () => import("@/views/product/CompareProduct.vue"),
      meta: {
        child: "comparison",
        requiresAuth: false,
        requiresAdmin: false,
        children: [],
      },
    },
    {
      path: "/saved",
      name: "product_saved",
      component: () => import("@/views/user/SavedProductsView.vue"),
      meta: {
        child: "saved",
        requiresAuth: false,
        requiresAdmin: false,
        children: [],
      },
    },
    {
      path: "/cart",
      name: "product_cart",
      component: () => import("@/views/user/CartView.vue"),
      meta: {
        child: "cart",
        requiresAuth: false,
        requiresAdmin: false,
        children: [],
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/user/User.vue"),
      meta: {
        child: "profile",
        requiresAuth: true,
        requiresAdmin: false,
        children: [],
      },
    },
  ],
};
