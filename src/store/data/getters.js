export default {
  testDate(state) {
    return state.antibodies.test_date || "წწ-თთ-დდ";
  },
  number(state) {
    return state.antibodies.number || undefined;
  },
  covidSickness(state) {
    return state.covid_sickness_date || "წწ-თთ-დდ";
  },
  vaccinationStage(state) {
    return state.vaccination_stage || undefined;
  },
  waiting(state) {
    return state.i_am_waiting || undefined;
  },
  meetings(state) {
    return state.what_about_meetings_in_live || undefined;
  },
  opinion(state) {
    return state.tell_us_your_opinion_about_us || undefined;
  },
  antibodyTest(state) {
    if (state.had_antibody_test === "true") {
      return true;
    } else if (state.had_antibody_test === "false") {
      return false;
    }
    return undefined;
  },
  hadVaccine(state) {
    if (state.had_vaccine === "true") {
      return true;
    } else if (state.had_vaccine === "false") {
      return false;
    }
    return undefined;
  },
  daysFromOffice(state) {
    return state.number_of_days_from_office;
  },
};
