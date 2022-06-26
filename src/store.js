import { createStore } from "vuex";

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
  mutations: {
    showAntiBodyInput(state) {
      state.booleans.showAntiBody = true;
    },
    showAdditionalInputs(state) {
      state.booleans.showCovidDate = false;
      state.booleans.showAntiInputs = true;
      state.data.covid_sickness_date = "";
    },
    hideAdditionalInputs(state) {
      state.booleans.showCovidDate = true;
      state.booleans.showAntiInputs = false;
      state.data.antibodies.test_date = "";
      state.data.antibodies.number = "";
    },
    hideAllAdditionalInputs(state) {
      state.data.covid_sickness_date = "";
      state.data.antibodies.test_date = "";
      state.data.antibodies.number = "";
      state.data.had_antibody_test = "";
      state.booleans.showCovidDate = false;
      state.booleans.showAntiInputs = false;
      state.booleans.showAntiBody = false;
    },
    showStageInputs(state) {
      state.data.i_am_waiting = "";
      state.booleans.showStage = true;
      state.booleans.showWaitingInfo = false;
      state.booleans.showCovidInfo = false;
      state.booleans.showCovidInfoLink = false;
    },
    showCovidInfo(state) {
      state.booleans.showCovidInfo = true;
      state.booleans.showCovidInfoLink = false;
    },
    hideCovidInfo(state) {
      state.booleans.showCovidInfoLink = true;
      state.booleans.showCovidInfo = false;
    },
    hideAllCovidInfo(state) {
      state.data.vaccination_stage = "";
      state.booleans.showLink = false;
      state.booleans.showStage = false;
      state.booleans.showWaitingInfo = true;
    },
    hideAllCovidAdditionals(state) {
      state.booleans.showStage = false;
      state.booleans.showCovidInfo = false;
      state.booleans.showCovidInfoLink = false;
    },
    showLink(state) {
      state.booleans.showLink = true;
    },
    hideLink(state) {
      state.booleans.showLink = false;
    },
    updateField(state, { data, fieldName, updatedValue }) {
      if (fieldName === "test_date" || fieldName === "number") {
        data.antibodies[fieldName] = updatedValue;
      } else data[fieldName] = updatedValue;
    },
  },
  getters: {
    testDateGetter(state) {
      if (state.data.antibodies.test_date) {
        return state.data.antibodies.test_date.replace(/-/g, "/");
      } else delete state.data.antibodies.test_date;
    },
    numberGetter(state) {
      if (state.data.antibodies.number) {
        return parseInt(state.data.antibodies.number);
      } else delete state.data.antibodies.number;
    },
    covidSicknessGetter(state) {
      if (state.data.covid_sickness_date) {
        return state.data.covid_sickness_date.replace(/-/g, "/");
      } else delete state.data.covid_sickness_date;
    },
    vaccinationStageGetter(state) {
      if (state.data.vaccination_stage) {
        return state.data.vaccination_stage;
      } else delete state.data.vaccination_stage;
    },
    waitingGetter(state) {
      if (state.data.i_am_waiting) {
        return state.data.i_am_waiting;
      } else delete state.data.i_am_waiting;
    },
    meetingsGetter(state) {
      if (state.data.what_about_meetings_in_live) {
        return state.data.what_about_meetings_in_live;
      } else delete state.data.what_about_meetings_in_live;
    },

    opinionGetter(state) {
      if (state.data.tell_us_your_opinion_about_us) {
        return state.data.tell_us_your_opinion_about_us;
      } else delete state.data.tell_us_your_opinion_about_us;
    },
    antibodyTestGetter(state) {
      if (state.data.had_antibody_test === "true") {
        return (state.data.had_antibody_test = true);
      } else if (state.data.had_antibody_test === "false") {
        return (state.data.had_antibody_test = false);
      } else if (state.data.had_antibody_test === "") {
        delete state.data.had_antibody_test;
      }
      return state.data.had_antibody_test;
    },
    hadVaccineGetter(state) {
      if (state.data.had_vaccine === "true") {
        return (state.data.had_vaccine = true);
      } else if (state.data.had_vaccine === "false") {
        return (state.data.had_vaccine = false);
      }
      return state.data.had_vaccine;
    },
    daysFromOfficeGetter(state) {
      return parseInt(state.data.number_of_days_from_office);
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
    showAntiBodyInputs(context) {
      context.commit("showAntiBodyInput");
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
    showLink(context) {
      context.commit("showLink");
    },
    hideLink(context) {
      context.commit("hideLink");
    },
    updateFirstName(context, payload) {
      context.commit("updateFirstName", payload);
    },
    updateField({ commit }, { data, fieldName, updatedValue }) {
      commit("updateField", { data, fieldName, updatedValue });
    },
  },
});

export default store;
