<template>
  <div class="flex flex-col mt-20">
    <h1 class="font-extrabold text-xl mb-3">რას ელოდები?*</h1>
    <div class="flex flex-col ml-5">
      <radio-input
        name="i_am_waiting"
        value="registered_and_waiting"
        label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
      />
      <radio-input
        name="i_am_waiting"
        value="not_planning"
        label="არ ვგეგმავ"
      />
      <radio-input
        name="i_am_waiting"
        value="had_covid_and_planning_to_be_vaccinated"
        label="გადატანილი მაქვს და ვგეგმავ აცრას"
      />
      <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="i_am_waiting" />
    </div>
  </div>
  <CovidAdditionalComment
    v-if="i_am_waiting === 'had_covid_and_planning_to_be_vaccinated'"
  />
  <div v-if="i_am_waiting === 'not_planning'" class="mt-10 ml-10 font-bold">
    👉
    <a class="text-blue-500" href="https://booking.moh.gov.ge/"
      >https://booking.moh.gov.ge/</a
    >
  </div>
</template>

<script>
import { ErrorMessage } from "vee-validate";
import { mapState } from "vuex";
import CovidAdditionalComment from "@/components/CovidAdditionalComment.vue";
import RadioInput from "@/UI/RadioInput.vue";
export default {
  components: {
    ErrorMessage,
    CovidAdditionalComment,
    RadioInput,
  },
  methods: {
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("updateField", {
        fieldName,
        updatedValue, 
      });
    },
  },
  computed: {
    ...mapState(["i_am_waiting"]),
  },
};
</script>
