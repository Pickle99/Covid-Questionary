export default {
  updateField({ commit }, { data, fieldName, updatedValue }) {
    commit("updateField", { data, fieldName, updatedValue });
  },
};
