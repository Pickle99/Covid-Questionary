<template>
  <div
    class="flex flex-col my-10 lg:w-[33rem] mob:w-72 mob:items-center mob:w-full"
  >
    <label for="{{name}}" class="font-extrabold text-xl mb-3">{{
      label
    }}</label>
    <Field
      class="border-2 border-black px-4 py-2"
      :name="name"
      :type="type"
      :value="$store.state[name]"
      :rules="rules"
      :placeholder="placeholder"
      @input="updateData(name, $event.target.value)"
    />

    <ErrorMessage class="ml-5 mt-2 text-[#F15524]" :name="name" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    rules: { 
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("updateField", {
        fieldName,
        updatedValue,
      });
    },
  },
};
</script>
