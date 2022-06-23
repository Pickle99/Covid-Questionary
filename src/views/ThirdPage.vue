<template>
  <div class="lg:mx-52">
    <RedberryHeader />

    <div class="flex">
      <div class="lg:w-[150rem] mob:mx-10">
        <Form @submit="onSubmit" id="form">
          <div class="flex flex-col mt-10 justify-center">
            <h1 class="font-extrabold text-xl mb-3">უკვე აცრილი ხარ?*</h1>
            <div class="flex flex-col ml-5">
              <div class="flex items-center">
                <Field
                  name="had_vaccine"
                  class="scale-125"
                  type="radio"
                  rules="required_boolean"
                  value="true"
                  @input="updateData('had_vaccine', $event.target.value)"
                  @click="showStageInputs"
                />
                <label class="ml-5" for="had_vaccine">კი</label>
              </div>
              <div>
                <Field
                  name="had_vaccine"
                  class="my-3 scale-125"
                  rules="required_boolean"
                  value="false"
                  type="radio"
                  @input="updateData('had_vaccine', $event.target.value)"
                  @click="hideAllCovidInfo"
                />
                <label class="ml-5" for="had_vaccine">არა</label>
              </div>
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
        <img width="2300" src="../components/images/doctor2.png" alt="img" />
      </div>
    </div>
  </div>
  <div
    class="mob:mt-10 flex justify-center mob:justify-between mob:mx-40"
    type="submit"
  >
    <input
      type="image"
      @click="back"
      src="src/components/images/left.png"
      alt="img"
    />
    <input
      class="lg:mx-40"
      type="image"
      form="form"
      src="src/components/images/right.png"
      alt="img"
    />
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import { mapActions, mapState } from "vuex";
import VaccinatedStage from "@/components/VaccinatedStage.vue";
import VaccinationStageTwo from "@/components/VaccinationStageTwo.vue";
export default {
  computed: {
    ...mapState({
      data: (state) => state.data,
      had_vaccine: (state) => state.data.had_vaccine,
    }),
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

    updateData(fieldName, updatedValue) {
      this.$store.dispatch("updateField", {
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
  components: {
    VaccinatedStage,
    RedberryHeader,
    VaccinationStageTwo,
    Form,
    Field,
    ErrorMessage,
  },
};
</script>
