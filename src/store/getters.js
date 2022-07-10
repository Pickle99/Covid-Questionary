export default {
  testDate(state) {
   if(state.had_covid === 'yes') {
     if(state.had_antibody_test === 'true') {
       return state.antibodies.test_date || "წწ-თთ-დდ";
     };
     return 'წწ-თთ-დდ';
   }
    return 'წწ-თთ-დდ';
  },
  number(state) {
    if(state.had_covid === 'yes') {
      if(state.had_antibody_test === 'true') {
        return state.antibodies.number || null;
      }
      return null;
    }
    return null;
  },
  covidSickness(state) {
    if(state.had_covid === 'yes') {
      if(state.had_antibody_test === 'false') {
        return state.covid_sickness_date || "წწ-თთ-დდ";
      }
      return 'წწ-თთ-დდ';
    }
    return 'წწ-თთ-დდ';
  },
  vaccinationStage(state) {
    if(state.had_vaccine === 'true') {
      return state.vaccination_stage || null;
    }
    return null;
  },
  waiting(state) {
    if(state.had_vaccine === 'false'){
      return state.i_am_waiting || null;
    }
    return null;
  },
  meetings(state) {
    return state.what_about_meetings_in_live || null;
  },
  opinion(state) {
    return state.tell_us_your_opinion_about_us || null;
  },
  antibodyTest(state) {
   if(state.had_covid === 'yes') {
     if (state.had_antibody_test === "true") {
       return true;
     } else if (state.had_antibody_test === "false") {
       return false;
     }
     return null;
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

  processedData(state, getters) {
    const allDataObj = getters.allData;
    Object.keys(allDataObj).forEach((key) => {
      if (allDataObj[key] === null) {
        delete allDataObj[key];
      }
    });
    Object.keys(allDataObj.antibodies).forEach((key) => {
      if (allDataObj.antibodies[key] === null) {
        delete allDataObj.antibodies[key];
      }
    });
    return allDataObj;
  },
};
