<template>
  <div class="lg:mx-52">
    <RedberryHeader />

    <div class="flex">
      <div class="lg:w-[150rem] mob:mx-10">
        <Form @submit="onSubmit" id="form">
          <div class="flex flex-col mt-10 justify-center">
            <h1 class="font-extrabold text-xl mb-3">უკვე აცრილი ხარ?*</h1>
            <div class="flex flex-col ml-5">
              <radio-input
                :key="option.id"
                v-for="option in options"
                :name="option.name"
                :value="option.value"
                :label="option.label"
                :click="option.click"
              />
              <ErrorMessage
                class="ml-5 mt-1 text-[#F15524]"
                name="had_vaccine"
              />
            </div>
          </div>
          <VaccinatedStage v-if="this.$store.state.booleans.showStage" />
          <VaccinationStageTwo
            v-if="this.$store.state.booleans.showWaitingInfo"
          />
        </Form>
      </div>
      <div class="mob:hidden">
        <img width="2300" src="@/components/images/doctor2.png" alt="img" />
      </div>
    </div>
  </div>
  <div
    class="mob:mt-10 flex justify-center mob:justify-between mob:mx-40"
    type="submit"
  >
    <button @click="back">
      <img src="@/components/images/left.png" />
    </button>
    <button class="lg:mx-40" type="submit" form="form">
      <img src="@/components/images/right.png" />
    </button>
  </div>
</template>

<script>
import { Form, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import RadioInput from "@/UI/RadioInput.vue";
import { mapActions, mapState } from "vuex";
import VaccinatedStage from "@/components/VaccinatedStage.vue";
import VaccinationStageTwo from "@/components/VaccinationStageTwo.vue";
export default {
  computed: {
    ...mapState("dataModule", ["data"]),
  },
  methods: {
    ...mapActions([
      "showStageInputs",
      "showCovidInfo",
      "hideCovidInfo",
      "hideAllCovidInfo",
    ]),
    back() {
      this.$router.push({ name: "second" });
      this.$store.state.count--;
    },
    onSubmit() {
      this.$store.state.count++;
      this.$router.push({ name: "fourth" });
    },
  },
  components: {
    VaccinatedStage,
    RedberryHeader,
    VaccinationStageTwo,
    Form,
    ErrorMessage,
    RadioInput,
  },
  data() {
    return {
      options: [
        {
          id: "1",
          name: "had_vaccine",
          value: "true",
          label: "კი",
          click: this.showStageInputs,
        },
        {
          id: "2",
          name: "had_vaccine",
          value: "false",
          label: "არა",
          click: this.hideAllCovidInfo,
        },
      ],
    };
  },
};
</script>
