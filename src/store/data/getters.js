export default {
  testDate(state) {
    return state.antibodies.test_date || "წწ-თთ-დდ";
  },
  number(state) {
    return state.antibodies.number || null;
  },
  covidSickness(state) {
    return state.covid_sickness_date || "წწ-თთ-დდ";
  },
  vaccinationStage(state) {
    return state.vaccination_stage || null;
  },
  waiting(state) {
    return state.i_am_waiting || null;
  },
  meetings(state) {
    return state.what_about_meetings_in_live || null;
  },
  opinion(state) {
    return state.tell_us_your_opinion_about_us || null;
  },
  antibodyTest(state) {
    if (state.had_antibody_test === "true") {
      return true;
    } else if (state.had_antibody_test === "false") {
      return false;
    }
    return null;
  },
  hadVaccine(state) {
    if (state.had_vaccine === "true") {
      return true;
    } else if (state.had_vaccine === "false") {
      return false;
    }
    return null;
  },
  daysFromOffice(state) {
    return state.number_of_days_from_office;
  },
  testDateCorrectReturn(state, getters) {
    if (getters.testDate === "წწ-თთ-დდ") {
      return null;
    } else return getters.testDate.replace(/-/g, "/");
  },
  covidDateCorrectReturn(state, getters) {
    if (getters.covidSickness === "წწ-თთ-დდ") {
      return null;
    } else return getters.covidSickness.replace(/-/g, "/");
  },

  allData(state, getters) {
    return {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      had_covid: state.had_covid,
      had_vaccine: getters.hadVaccine,
      i_am_waiting: getters.waiting,
      antibodies: {
        test_date: getters.testDateCorrectReturn,
        number: parseInt(getters.number) || null,
      },
      covid_sickness_date: getters.covidDateCorrectReturn || null,
      had_antibody_test: getters.antibodyTest,
      vaccination_stage: getters.vaccinationStage,
      non_formal_meetings: state.non_formal_meetings,
      number_of_days_from_office: parseInt(getters.daysFromOffice) || null,
      what_about_meetings_in_live: getters.meetings,
      tell_us_your_opinion_about_us: getters.opinion,
    };
  },
};
