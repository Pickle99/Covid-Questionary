export default {
  updateField(context, data, fieldName, updatedValue) {
    context.commit("updateField", data, fieldName, updatedValue);
  },
};
