import { createRouter, createWebHistory } from "vue-router";
import ButtonView from "@/views/ButtonView.vue";
import ChangesView from "@/views/ChangesView.vue";
import AuthView from "@/views/AuthView.vue";
import PullView from "@/views/PullView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/button/?id=1'
    },
    {
      path: "/button",
      name: "button",
      component: ButtonView,
    },
    {
      path: "/changes",
      name: "changes",
      component: ChangesView,
    },
    {
      path: "/changes/auth",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/changes/pull",
      name: "pull",
      component: PullView,
    },
  ],
});

export default router;
