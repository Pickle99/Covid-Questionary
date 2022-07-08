<script>
import { ErrorMessage, Form } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import AntiBodyInput from "@/components/AntiBodyInput.vue";
import RightButton from "@/UI/RightButton.vue";
import LeftButton from "@/UI/LeftButton.vue";
import { mapState } from "vuex";
import RadioInput from "@/UI/RadioInput.vue";
export default {
  methods: {
    back() {
      this.$router.push({ name: "first" });
      this.$store.state.count--;
    },
    onSubmit() {
      this.$store.state.count++;
      this.$router.push({ name: "third" });
    },
  },
  computed: {
    ...mapState("formData", [
      "covid_sickness_date",
      "antibodies",
      "had_antibody_test",
      "had_covid",
    ]),
  },
  components: {
    LeftButton,
    RedberryHeader,
    AntiBodyInput,
    Form,
    ErrorMessage,
    RightButton,
    RadioInput,
  },
};
</script>

<template>
  <Form as="div" class="lg:mx-52" v-slot="{ meta }">
    <RedberryHeader :page="2" />
    <div class="flex mob:justify-center mob:mx-10">
      <form>
        <div class="flex flex-col mt-5">
          <h1 class="font-extrabold text-xl mb-3">
            გაქვს გადატანილი Covid-19?
          </h1>
          <radio-input name="had_covid" value="yes" label="კი" />
          <radio-input name="had_covid" value="no" label="არა" />
          <radio-input
            name="had_covid"
            value="have_right_now"
            label="ახლა მაქვს"
          />
          <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="had_covid" />
        </div>
        <AntiBodyInput v-if="had_covid === 'yes'" />
      </form>
      <div class="ml-96 mob:hidden">
        <img width="700" src="@/assets/images/human2.png" alt="img" />
      </div>
    </div>
    <div class="mob:mt-10 flex justify-center mob:justify-between mob:mx-40">
      <left-button :back="back" />
      <right-button
        :onClick="onSubmit"
        :isDisabled="!meta.valid"
        :class="!meta.valid ? 'opacity-40 lg:mx-40' : 'opacity-100 lg:mx-40'"
      />
    </div>
  </Form>
</template>
