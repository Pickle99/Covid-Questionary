export default {
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
};
