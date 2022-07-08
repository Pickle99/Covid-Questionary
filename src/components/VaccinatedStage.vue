<template>
  <div class="flex flex-col mt-20">
    <h1 class="font-extrabold text-xl mb-3">აირჩიე რა ეტაპზე ხარ*</h1>
    <div class="flex flex-col ml-5">
      <radio-input
        name="vaccination_stage"
        value="first_dosage_and_registered_on_the_second"
        label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
      />
      <radio-input
        name="vaccination_stage"
        value="fully_vaccinated"
        label="სრულად აცრილი ვარ"
      />
      <radio-input
        name="vaccination_stage"
        value="first_dosage_and_not_registered_yet"
        label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
      />
      <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="vaccination_stage" />
    </div>
  </div>
  <div
    class="flex flex-col mt-10 ml-10"
    v-if="vaccination_stage === 'first_dosage_and_not_registered_yet'"
  >
    <h1 class="font-semibold">
      რომ არ გადადო,
      <p>ბარემ ახლავე დარეგისტრირდი</p>
    </h1>
    <a class="text-blue-500 font-semibold" href="https://booking.moh.gov.ge/"
      >https://booking.moh.gov.ge/</a
    >
  </div>
</template>

<script>
import { ErrorMessage } from "vee-validate";
import { mapState } from "vuex";
import RadioInput from "@/UI/RadioInput.vue";
export default {
  computed: {
    ...mapState(["vaccination_stage"]),
  },
  methods: {
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("updateField", {
        fieldName,
        updatedValue,
      });
    },
  },
  components: {
    ErrorMessage,
    RadioInput,
  },
};
</script>
