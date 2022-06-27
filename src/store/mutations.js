export default {
  showAntiBodyInput(state) {
    state.booleans.showAntiBody = true;
  },
  showAdditionalInputs(state) {
    state.booleans.showCovidDate = false;
    state.booleans.showAntiInputs = true;
    state.dataModule.data.covid_sickness_date = "";
  },
  hideAdditionalInputs(state) {
    state.booleans.showCovidDate = true;
    state.booleans.showAntiInputs = false;
    state.dataModule.data.antibodies.test_date = "";
    state.dataModule.data.antibodies.number = "";
  },
  hideAllAdditionalInputs(state) {
    state.dataModule.data.covid_sickness_date = "";
    state.dataModule.data.antibodies.test_date = "";
    state.dataModule.data.antibodies.number = "";
    state.dataModule.data.had_antibody_test = "";
    state.booleans.showCovidDate = false;
    state.booleans.showAntiInputs = false;
    state.booleans.showAntiBody = false;
  },
  showStageInputs(state) {
    state.dataModule.data.i_am_waiting = "";
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
    state.dataModule.data.vaccination_stage = "";
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
