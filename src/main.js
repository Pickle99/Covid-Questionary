import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./config/vee-validate/rules";
import "./config/vee-validate/messages";

const app = createApp(App);

app.use(router);

const store = createStore({
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
    };
  },
});

app.use(store);

app.mount("#app");
