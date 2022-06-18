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
      data: {
        first_name: "",
        last_name: "",
        email: "",
        had_covid: "",
        had_antibody_test: "",
        covid_sickness_date: "",
        antibodies: {
          test_date: "",
          number: "",
        },
      },
      count: 1,
      booleans: {
        showCovidDate: false,
        showAntiBody: false,
        showAntiInputs: false,
      },
    };
  },
  mutations: {
    showAdditionalInputs(state) {
      state.booleans.showCovidDate = false;
      state.booleans.showAntiInputs = true;
    },
    hideAdditionalInputs(state) {
      state.booleans.showCovidDate = true;
      state.booleans.showAntiInputs = false;
    },
    hideAllAdditionalInputs(state) {
      state.booleans.showCovidDate = false;
      state.booleans.showAntiInputs = false;
      state.booleans.showAntiBody = false;
    },
  },
  actions: {
    showAdditionalInputs(context) {
      context.commit("showAdditionalInputs");
    },
    hideAdditionalInputs(context) {
      context.commit("hideAdditionalInputs");
    },
    hideAllAdditionalInputs(context) {
      context.commit("hideAllAdditionalInputs");
    },
  },
});

app.use(store);

app.mount("#app");
