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
        had_vaccine: "",
        vaccination_stage: "",
        non_formal_meetings: "",
        number_of_days_from_office: "",
        what_about_meetings_in_live: "",
        tell_us_your_opinion_about_us: "",
      },
      count: 1,
      booleans: {
        showCovidDate: false,
        showAntiBody: false,
        showAntiInputs: false,
        showStage: false,
        showCovidInfo: false,
        showCovidInfoLink: false,
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
    showStageInputs(state) {
      state.booleans.showStage = true;
    },
    showCovidInfo(state) {
      state.booleans.showCovidInfo = true;
      state.booleans.showCovidInfoLink = false;
    },
    hideCovidInfo(state) {
      state.booleans.showCovidInfo = false;
      state.booleans.showCovidInfoLink = true;
    },
    hideAllCovidInfo(state) {
      state.booleans.showCovidInfo = false;
      state.booleans.showCovidInfoLink = false;
      state.booleans.showStage = false;
    },
    hideAllCovidAdditionals(state) {
      state.booleans.showCovidInfo = false;
      state.booleans.showCovidInfoLink = false;
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
    showStageInputs(context) {
      context.commit("showStageInputs");
    },
    showCovidInfo(context) {
      context.commit("showCovidInfo");
    },
    hideCovidInfo(context) {
      context.commit("hideCovidInfo");
    },
    hideAllCovidInfo(context) {
      context.commit("hideAllCovidInfo");
    },
    hideAllCovidAdditionals(context) {
      context.commit("hideAllCovidAdditionals");
    },
  },
});

app.use(store);

app.mount("#app");
