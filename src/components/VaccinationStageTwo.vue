<template>
  <div class="flex flex-col mt-20">
    <h1 class="font-extrabold text-xl mb-3">რას ელოდები?*</h1>
    <div class="flex flex-col ml-5">
      <!--      <div class="flex items-center">-->
      <!--        <Field-->
      <!--          name="i_am_waiting"-->
      <!--          class="scale-125"-->
      <!--          value="registered_and_waiting"-->
      <!--          type="radio"-->
      <!--          rules="required"-->
      <!--          @input="updateData('i_am_waiting', $event.target.value)"-->
      <!--          @click="hideAllCovidAdditionals"-->
      <!--        />-->
      <!--        <label class="ml-5" for="i_am_waiting"-->
      <!--          >დარეგისტრირებული ვარ და ველოდები რიცხვს</label-->
      <!--        >-->
      <!--      </div>-->
      <!--      <div>-->
      <!--        <Field-->
      <!--          name="i_am_waiting"-->
      <!--          class="my-3 scale-125"-->
      <!--          value="not_planning"-->
      <!--          type="radio"-->
      <!--          rules="required"-->
      <!--          @input="updateData('i_am_waiting', $event.target.value)"-->
      <!--          @click="hideCovidInfo"-->
      <!--        />-->
      <!--        <label class="ml-5" for="i_am_waiting">არ ვგეგმავ</label>-->
      <!--      </div>-->

      <!--      <div>-->
      <!--        <Field-->
      <!--          name="i_am_waiting"-->
      <!--          class="my-3 scale-125"-->
      <!--          value="had_covid_and_planning_to_be_vaccinated"-->
      <!--          type="radio"-->
      <!--          rules="required"-->
      <!--          @input="updateData('i_am_waiting', $event.target.value)"-->
      <!--          @click="showCovidInfo"-->
      <!--        />-->
      <!--        <label class="ml-5" for="i_am_waiting"-->
      <!--          >გადატანილი მაქვს და ვგეგმავ აცრას</label-->
      <!--        >-->
      <!--      </div>-->
      <radio-input
        :key="option.id"
        v-for="option in options"
        :name="option.name"
        :value="option.value"
        :label="option.label"
        :click="option.click"
      />
      <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="i_am_waiting" />
    </div>
  </div>
  <CovidAdditionalComment v-if="this.$store.state.booleans.showCovidInfo" />
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
import CovidAdditionalComment from "@/components/CovidAdditionalComment.vue";
import RadioInput from "@/UI/RadioInput.vue";
export default {
  methods: {
    ...mapActions([
      "hideCovidInfo",
      "showCovidInfo",
      "hideAllCovidAdditionals",
    ]),
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
    CovidAdditionalComment,
    RadioInput,
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      i_am_waiting: (state) => state.data.i_am_waiting,
    }),
  },
  data() {
    return {
      options: [
        {
          id: "1",
          name: "i_am_waiting",
          value: "registered_and_waiting",
          label: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
          click: this.hideAllCovidAdditionals,
        },
        {
          id: "2",
          name: "i_am_waiting",
          value: "not_planning",
          label: "არ ვგეგმავ",
          click: this.hideCovidInfo,
        },
        {
          id: "3",
          name: "i_am_waiting",
          value: "had_covid_and_planning_to_be_vaccinated",
          label: "გადატანილი მაქვს და ვგეგმავ აცრას",
          click: this.showCovidInfo,
        },
      ],
    };
  },
};
</script>
