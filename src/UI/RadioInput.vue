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
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Field,
  },
  computed: {
    ...mapState("dataModule", ["data"]),
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
    ...mapActions(["hideAllAdditionalInputs"]),
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("dataModule/updateField", {
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
};
</script>
