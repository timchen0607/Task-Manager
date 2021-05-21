import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./assets/scss/_reset.scss";
import "./assets/scss/_global.scss";

createApp(App)
  .use(router)
  .mount("#app");
