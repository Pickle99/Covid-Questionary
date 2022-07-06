export default {
  testDateGetter(state) {
    return state.antibodies.test_date || "წწ-თთ-დდ";
  },
  numberGetter(state) {
    return state.antibodies.number || undefined;
  },
  covidSicknessGetter(state) {
    return state.covid_sickness_date || "წწ-თთ-დდ";
  },
  vaccinationStageGetter(state) {
    return state.vaccination_stage || undefined;
  },
  waitingGetter(state) {
    return state.i_am_waiting || undefined;
  },
  meetingsGetter(state) {
    return state.what_about_meetings_in_live || undefined;
  },

  opinionGetter(state) {
    return state.tell_us_your_opinion_about_us || undefined;
  },
  antibodyTestGetter(state) {
    if (state.had_antibody_test === "true") {
      return true;
    } else if (state.had_antibody_test === "false") {
      return false;
    }
    return undefined;
  },
  hadVaccineGetter(state) {
    if (state.had_vaccine === "true") {
      return true;
    } else if (state.had_vaccine === "false") {
      return false;
    }
    return undefined;
  },
  daysFromOfficeGetter(state) {
    return state.number_of_days_from_office;
  },
};
