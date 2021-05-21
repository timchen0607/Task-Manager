import { createRouter, createWebHistory } from "vue-router";
import MyTasks from "./views/MyTasks.vue";

const routes = [
  {
    path: "/",
    name: "MyTasks",
    component: MyTasks,
  },
  {
    path: "/InProgress",
    name: "InProgress",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/InProgress.vue"),
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
