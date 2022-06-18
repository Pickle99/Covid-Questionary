<template>
  <div class="mx-52">
    <RedberryHeader />

    <div class="flex">
      <div class="w-[150rem]">
        <Form @submit="onSubmit" id="form">
          <div class="flex flex-col mt-10">
            <h1 class="font-extrabold text-xl mb-3">უკვე აცრილი ხარ?*</h1>
            <div class="flex flex-col ml-5">
              <div class="flex items-center">
                <Field
                  name="had_vaccine"
                  class="scale-125"
                  value="yes"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.had_vaccine"
                  @click="hideAllCovidInfo"
                />
                <label class="ml-5" for="had_vaccine">კი</label>
              </div>
              <div>
                <Field
                  name="had_vaccine"
                  class="my-3 scale-125"
                  value="no"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.had_vaccine"
                  @click="showStageInputs"
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
        </Form>
      </div>
      <div>
        <img width="2300" src="../components/images/doctor2.png" alt="img" />
      </div>
    </div>
  </div>
  <div class="flex justify-center" type="submit">
    <input
      type="image"
      @click="back"
      src="src/components/images/left.png"
      alt="img"
    />
    <input
      class="mx-40"
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
import { mapActions } from "vuex";
import VaccinatedStage from "@/components/VaccinatedStage.vue";
export default {
  methods: {
    back() {
      this.$router.push({ name: "second" });
      this.$store.state.count--;
    },
    onSubmit(values) {
      console.log(values, null, 2);
      this.$store.state.count++;
      this.$router.push({ name: "fourth" });
    },
    ...mapActions([
      "showStageInputs",
      "showCovidInfo",
      "hideCovidInfo",
      "hideAllCovidInfo",
    ]),
  },
  components: {
    VaccinatedStage,
    RedberryHeader,
    Form,
    Field,
    ErrorMessage,
  },
};
</script>
