export default {
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
  updateField({ commit }, { data, fieldName, updatedValue }) {
    commit("updateField", { data, fieldName, updatedValue });
  },
};
