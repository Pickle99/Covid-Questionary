<template>
  <div class="flex flex-col mt-20">
    <h1 class="font-extrabold text-xl mb-3">აირჩიე რა ეტაპზე ხარ*</h1>
    <div class="flex flex-col ml-5">
      <radio-input
        :key="option.id"
        v-for="option in options"
        :name="option.name"
        :value="option.value"
        :label="option.label"
        :click="option.click"
      />
      <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="vaccination_stage" />
    </div>
  </div>
  <div
    class="flex flex-col mt-10 ml-10"
    v-if="this.$store.state.booleans.showLink"
  >
    <h1 class="font-semibold">
      რომ არ გადადო,
      <p>ბარემ ახლავე დარეგისტრირდი</p>
    </h1>
    <a class="text-blue-500 font-semibold" href="https://booking.moh.gov.ge/"
      >https://booking.moh.gov.ge/</a
    >
  </div>
  <div
    v-if="this.$store.state.booleans.showCovidInfoLink"
    class="mt-10 ml-10 font-bold"
  >
    👉
    <a class="text-blue-500" href="https://booking.moh.gov.ge/"
      >https://booking.moh.gov.ge/</a
    >
  </div>
</template>

<script>
import { ErrorMessage } from "vee-validate";
import { mapActions } from "vuex";
import RadioInput from "@/UI/RadioInput.vue";
export default {
  methods: {
    ...mapActions(["showLink", "hideLink"]),
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("formData/updateField", {
        fieldName,
        updatedValue,
      });
    },
  },
  components: {
    ErrorMessage,
    RadioInput,
  },
  data() {
    return {
      options: [
        {
          id: "1",
          name: "vaccination_stage",
          value: "first_dosage_and_registered_on_the_second",
          label: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
          click: this.hideLink,
        },
        {
          id: "2",
          name: "vaccination_stage",
          value: "fully_vaccinated",
          label: "სრულად აცრილი ვარ",
          click: this.hideLink,
        },
        {
          id: "3",
          name: "vaccination_stage",
          value: "first_dosage_and_not_registered_yet",
          label: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
          click: this.showLink,
        },
      ],
    };
  },
};
</script>
