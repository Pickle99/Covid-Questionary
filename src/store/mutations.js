export default {
  showAntiBodyInput(state) {
    state.booleans.showAntiBody = true;
  },
  showAdditionalInputs(state) {
    state.booleans.showCovidDate = false;
    state.booleans.showAntiInputs = true;
    state.formData.covid_sickness_date = "";
  },
  hideAdditionalInputs(state) {
    state.booleans.showCovidDate = true;
    state.booleans.showAntiInputs = false;
    state.formData.antibodies.test_date = "";
    state.formData.antibodies.number = "";
  },
  hideAllAdditionalInputs(state) {
    state.formData.covid_sickness_date = "";
    state.formData.antibodies.test_date = "";
    state.formData.antibodies.number = "";
    state.formData.had_antibody_test = "";
    state.booleans.showCovidDate = false;
    state.booleans.showAntiInputs = false;
    state.booleans.showAntiBody = false;
  },
  showStageInputs(state) {
    state.formData.i_am_waiting = "";
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
    state.formData.vaccination_stage = "";
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
};
