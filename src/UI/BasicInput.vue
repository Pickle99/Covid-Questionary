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
      :value="value"
      :rules="rules"
      :placeholder="placeholder"
      @input="updateData(name, $event.target.value)"
    />

    <ErrorMessage class="ml-5 mt-2 text-[#F15524]" :name="name" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { mapState } from "vuex";
export default {
  components: {
    Field,
    ErrorMessage,
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      first_name: (state) => state.data.first_name,
      last_name: (state) => state.data.last_name,
      email: (state) => state.data.email,
    }),
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
    value: {
      type: String,
      required: true,
      default: "",
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
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
};
</script>
