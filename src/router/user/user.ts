export default {
  path: "/",
  name: "product_card",
  component: () => import("@/components/cards/Carusel.vue"),
  meta: {
    child: "card",
    requiresAuth: false,
    requiresAdmin: false,
  },
  children: [],
};
