import { createStore } from "vuex";
import rootGetters from "./getters";
import rootMutations from "./mutations";
import rootActions from "./actions";

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
        i_am_waiting: "",
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
        showWaitingInfo: false,
        showCovidInfoLink: false,
        showLink: false,
      },
    };
  },
  mutations: rootMutations,

  getters: rootGetters,

  actions: rootActions,
});

export default store;
