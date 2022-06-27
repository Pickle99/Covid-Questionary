export default {
  updateField(state, { data, fieldName, updatedValue }) {
    if (fieldName === "test_date" || fieldName === "number") {
      data.antibodies[fieldName] = updatedValue;
    } else data[fieldName] = updatedValue;
  },
};
