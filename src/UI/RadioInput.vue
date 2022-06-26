<template>
  <div class="flex items-center">
    <Field
      :name="name"
      class="scale-125 my-2 ml-5"
      type="radio"
      rules="required"
      :value="value"
      @input="updateData('had_covid', $event.target.value)"
      @click="click"
    />
    <label class="ml-5" for="had_covid">{{ label }}</label>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "vuex";
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
      required: true,
    },
  },
  methods: {
    ...mapActions(["hideAllAdditionalInputs"]),
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
