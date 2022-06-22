<template>
  <div class="flex flex-col mt-20">
    <h1 class="font-extrabold text-xl mb-3">აირჩიე რა ეტაპზე ხარ*</h1>
    <div class="flex flex-col ml-5">
      <div class="flex items-center">
        <Field
          name="vaccination_stage"
          class="scale-125"
          value="first_dosage_and_registered_on_the_second"
          type="radio"
          rules="required"
          @input="updateData('vaccination_stage', $event.target.value)"
          @click="hideLink"
        />
        <label class="ml-5" for="vaccination_stage"
          >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
        >
      </div>
      <div>
        <Field
          name="vaccination_stage"
          class="my-3 scale-125"
          value="fully_vaccinated"
          type="radio"
          rules="required"
          @input="updateData('vaccination_stage', $event.target.value)"
          @click="hideLink"
        />
        <label class="ml-5" for="vaccination_stage">სრულად აცრილი ვარ</label>
      </div>

      <div>
        <Field
          name="vaccination_stage"
          class="my-3 scale-125"
          value="first_dosage_and_not_registered_yet"
          type="radio"
          rules="required"
          @input="updateData('vaccination_stage', $event.target.value)"
          @click="showLink"
        />
        <label class="ml-5" for="vaccination_stage"
          >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
        >
      </div>
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
import { Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["showLink", "hideLink"]),
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("updateField", {
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
  components: {
    Field,
    ErrorMessage,
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      vaccination_stage: (state) => state.data.vaccination_stage,
    }),
  },
};
</script>
