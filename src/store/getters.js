export default {
  testDateGetter(state) {
    if (state.dataModule.data.antibodies.test_date) {
      return state.dataModule.data.antibodies.test_date.replace(/-/g, "/");
    } else delete state.dataModule.data.antibodies.test_date;
  },
  numberGetter(state) {
    if (state.dataModule.data.antibodies.number) {
      return parseInt(state.dataModule.data.antibodies.number);
    } else delete state.dataModule.data.antibodies.number;
  },
  covidSicknessGetter(state) {
    if (state.dataModule.data.covid_sickness_date) {
      return state.dataModule.data.covid_sickness_date.replace(/-/g, "/");
    } else delete state.dataModule.data.covid_sickness_date;
  },
  vaccinationStageGetter(state) {
    if (state.dataModule.data.vaccination_stage) {
      return state.dataModule.data.vaccination_stage;
    } else delete state.dataModule.data.vaccination_stage;
  },
  waitingGetter(state) {
    if (state.dataModule.data.i_am_waiting) {
      return state.dataModule.data.i_am_waiting;
    } else delete state.dataModule.data.i_am_waiting;
  },
  meetingsGetter(state) {
    if (state.dataModule.data.what_about_meetings_in_live) {
      return state.dataModule.data.what_about_meetings_in_live;
    } else delete state.dataModule.data.what_about_meetings_in_live;
  },

  opinionGetter(state) {
    if (state.dataModule.data.tell_us_your_opinion_about_us) {
      return state.dataModule.data.tell_us_your_opinion_about_us;
    } else delete state.dataModule.data.tell_us_your_opinion_about_us;
  },
  antibodyTestGetter(state) {
    if (state.dataModule.data.had_antibody_test === "true") {
      return (state.dataModule.data.had_antibody_test = true);
    } else if (state.dataModule.data.had_antibody_test === "false") {
      return (state.dataModule.data.had_antibody_test = false);
    } else if (state.dataModule.data.had_antibody_test === "") {
      delete state.dataModule.data.had_antibody_test;
    }
    return state.dataModule.data.had_antibody_test;
  },
  hadVaccineGetter(state) {
    if (state.dataModule.data.had_vaccine === "true") {
      return (state.dataModule.data.had_vaccine = true);
    } else if (state.dataModule.data.had_vaccine === "false") {
      return (state.dataModule.data.had_vaccine = false);
    }
    return state.dataModule.data.had_vaccine;
  },
  daysFromOfficeGetter(state) {
    return parseInt(state.dataModule.data.number_of_days_from_office);
  },
};
