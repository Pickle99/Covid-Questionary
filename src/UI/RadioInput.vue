<template>
  <div class="flex items-center">
    <Field
      :name="name"
      class="scale-125 my-2 ml-5"
      type="radio"
      rules="required"
      :value="value"
      @input="updateData(name, $event.target.value)"
      @click="click"
    />
    <label class="ml-5" for="had_covid">{{ label }}</label>
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: {
    Field,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    click: {
      type: Function,
      required: false,
    },
  },
  methods: {
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("formData/updateField", {
        fieldName,
        updatedValue,
      });
    },
  },
};
</script>
