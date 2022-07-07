<template>
  <Form as="div" v-slot="{ meta }" class="lg:mx-52">
    <RedberryHeader :page="3" />

    <div class="flex">
      <div class="lg:w-[150rem] mob:mx-10">
        <form>
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
          <VaccinatedStage v-if="had_vaccine === 'true'" />
          <VaccinationStageTwo v-if="had_vaccine === 'false'" />
        </form>
      </div>
      <div class="mob:hidden">
        <img width="2300" src="@/assets/images/doctor2.png" alt="img" />
      </div>
    </div>
    <div class="mob:mt-10 flex justify-center mob:justify-between mob:mx-40">
      <button @click="back">
        <img src="@/assets/icons/arrow-left.svg" />
      </button>
      <right-button
        :onClick="onSubmit"
        :isDisabled="!meta.valid"
        :class="!meta.valid ? 'opacity-40 lg:mx-40' : 'opacity-100 lg:mx-40'"
      />
    </div>
  </Form>
</template>

<script>
import { Form, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import RadioInput from "@/UI/RadioInput.vue";
import {  mapState } from "vuex";
import VaccinatedStage from "@/components/VaccinatedStage.vue";
import VaccinationStageTwo from "@/components/VaccinationStageTwo.vue";
import RightButton from "@/UI/RightButton.vue";
export default {
  computed: {
    ...mapState("formData", ["had_vaccine"]),
  },
  methods: {
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
    RightButton,
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
        },
        {
          id: "2",
          name: "had_vaccine",
          value: "false",
          label: "არა",
        },
      ],
    };
  },
};
</script>
