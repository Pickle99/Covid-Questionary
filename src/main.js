import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import store from "@/store/index.js";
import "@/index.css";
import "@/config/vee-validate/rules.js";
import "@/config/vee-validate/messages.js";

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
