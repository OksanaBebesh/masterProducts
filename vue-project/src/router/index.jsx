import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/Product/ProductsView.vue"),
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("@/views/Customer/CustomersView.vue"),
    },
    {
      path: "/customers/add",
      name: "customersAdd",
      component: () => import("@/components/Customer/CustomersAddForm.vue"),
    },
    {
      path: "/customers/edit/:id",
      name: "customerEdit",
      component: () => import("@/components/Customer/CustomersEditForm.vue"),
      params: true
    }
  ],
});

export default router;