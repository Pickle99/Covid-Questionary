export default {
  updateField(state, { fieldName, updatedValue }) {
    if (fieldName === "test_date" || fieldName === "number") {
      state.antibodies[fieldName] = updatedValue;
    } else state[fieldName] = updatedValue;
  },
};
