<template>
  <Form v-slot="{ meta }" as="div" class="lg:mx-52">
    <RedberryHeader :page="3" />

    <div class="flex">
      <div class="lg:w-[150rem] mob:mx-10">
        <form>
          <div class="flex flex-col mt-10 justify-center">
            <h1 class="font-extrabold text-xl mb-3">უკვე აცრილი ხარ?*</h1>
            <div class="flex flex-col ml-5">
              <radio-input name="had_vaccine" value="true" label="კი" />
              <radio-input name="had_vaccine" value="false" label="არა" />
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
      <arrow-navigation :previous-page="true" :next-page="true"  :back="back" :on-click="onSubmit" :is-disabled="!meta.valid"/>
    </div> 
  </Form>
</template>

<script>
import { Form, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import RadioInput from "@/UI/RadioInput.vue";
import { mapState } from "vuex";
import VaccinatedStage from "@/components/VaccinatedStage.vue";
import VaccinationStageTwo from "@/components/VaccinationStageTwo.vue";
import ArrowNavigation from "@/UI/ArrowNavigation.vue";
export default {
  computed: {
    ...mapState(["had_vaccine"]),
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
    ArrowNavigation,
    RadioInput,
  },
};
</script>
