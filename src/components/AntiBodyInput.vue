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
          value="{{true}}"
          type="radio"
          rules="required"
          @click="showAdditionalInputs"
          :model="this.$store.state.data.had_antibody_test"
        />
        <label class="ml-5" for="had_antibody_test">კი</label>
      </div>

      <div class="mt-3">
        <Field
          name="had_antibody_test"
          class="scale-125"
          value="{{false}}"
          type="radio"
          rules="required"
          :model="this.$store.state.data.had_antibody_test"
          @click="hideAdditionalInputs"
        />
        <label class="ml-5" for="had_antibody_test">არა</label>
      </div>
      <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="had_antibody_test" />
    </div>
  </div>
  <CovidDateInput v-if="this.$store.state.booleans.showCovidDate" />
  <HadAntiBody v-if="this.$store.state.booleans.showAntiInputs" />
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { mapActions } from "vuex";
import CovidDateInput from "@/components/CovidDateInput.vue";
import HadAntiBody from "@/components/HadAntiBody.vue";
export default {
  components: {
    Field,
    ErrorMessage,
    CovidDateInput,
    HadAntiBody,
  },
  methods: {
    ...mapActions(["showAdditionalInputs", "hideAdditionalInputs"]),
  },
};
</script>
