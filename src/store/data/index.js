import dataMutations from "@/store/data/mutations.js";
import dataActions from "@/store/data/actions.js";

export default {
  namespaced: true,
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
    };
  },
  mutations: dataMutations,
  actions: dataActions,
};
