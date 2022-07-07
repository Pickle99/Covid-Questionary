<template>
  <div class="mt-10">
    <h1 class="font-extrabold text-xl mb-3">
      ანტისხეულების ტესტი გაქვს გაკეთებული?
    </h1>
    <div class="ml-5">
      <div>
        <Field
          name="had_antibody_test"
          class="scale-125"
          value="true"
          type="radio"
          rules="required_boolean"
          @input="updateData('had_antibody_test', $event.target.value)"
        />
        <label class="ml-5" for="had_antibody_test">კი</label>
      </div>

      <div class="mt-3">
        <Field
          name="had_antibody_test"
          class="scale-125"
          type="radio"
          value="false"
          rules="required_boolean"
          @input="updateData('had_antibody_test', $event.target.value)"
        />
        <label class="ml-5" for="had_antibody_test">არა</label>
      </div>
      <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="had_antibody_test" />
    </div>
  </div>
  <CovidDateInput v-if="had_antibody_test === 'false'" />
  <HadAntiBody v-if="had_antibody_test === 'true'" />
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { mapState } from "vuex";
import CovidDateInput from "@/components/CovidDateInput.vue";
import HadAntiBody from "@/components/HadAntiBody.vue";
export default {
  components: {
    Field,
    ErrorMessage,
    CovidDateInput,
    HadAntiBody,
  },
  computed: {
    ...mapState("formData", ["had_antibody_test"]),
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
