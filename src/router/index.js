import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/questions/1",
      name: "first",
      component: () => import("@/views/FirstPage.vue"),
    },
    {
      path: "/questions/2",
      name: "second",
      component: () => import("@/views/SecondPage.vue"),
    },
    {
      path: "/questions/3",
      name: "third",
      component: () => import("@/views/ThirdPage.vue"),
    },
    {
      path: "/questions/4",
      name: "fourth",
      component: () => import("@/views/FourthPage.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("@/views/ThankYou.vue"),
    },
  ],
});

export default router;
