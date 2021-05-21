import { createRouter, createWebHistory } from "vue-router";
import My_Tasks from "./views/My_Tasks.vue";

const routes = [
  {
    path: "/",
    name: "My_Tasks",
    component: My_Tasks,
  },
  {
    path: "/In_Progress",
    name: "In_Progress",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/In_Progress.vue"),
  },
  {
    path: "/Completed",
    name: "Completed",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Completed.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
