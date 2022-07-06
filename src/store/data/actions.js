export default {
  updateField(context, fieldName, updatedValue) {
    context.commit("updateField", fieldName, updatedValue);
  },
};
