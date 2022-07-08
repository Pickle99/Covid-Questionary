import { createStore } from "vuex";
import rootMutations from "@/store/mutations.js";
import rootActions from "@/store/actions.js";
import rootGetters from "@/store/getters.js";
const store = createStore({
  state() {
    return {
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
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
