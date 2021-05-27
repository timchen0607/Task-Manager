import { createRouter, createWebHistory } from "vue-router";
import MyTasks from "./views/MyTasks.vue";

const routes = [
  {
    path: "/",
    name: "root",
    redirect: '/Task'
  },
  {
    path: "/Task",
    name: "MyTasks",
    component: MyTasks,
  },
  {
    path: "/InProgress",
    name: "InProgress",
    component: MyTasks,
  },
  {
    path: "/Completed",
    name: "Completed",
    component: MyTasks,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
