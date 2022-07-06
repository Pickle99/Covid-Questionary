import formMutations from "@/store/data/mutations.js";
import formActions from "@/store/data/actions.js";
import formGetters from "@/store/data/getters.js";
export default {
  namespaced: true,
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
  mutations: formMutations,
  actions: formActions,
  getters: formGetters,
};
