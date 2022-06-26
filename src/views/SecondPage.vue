<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import AntiBodyInput from "@/components/AntiBodyInput.vue";
import { mapActions, mapState } from "vuex";
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
    ...mapActions(["hideAllAdditionalInputs", "showAntiBodyInputs"]),
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("updateField", {
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
  components: {
    RedberryHeader,
    AntiBodyInput,
    Form,
    ErrorMessage,
    RadioInput,
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      had_covid: (state) => state.data.had_covid,
    }),
  },
  data() {
    return {
      options: [
        {
          id: "1",
          name: "had_covid",
          value: "yes",
          label: "კი",
          click: this.showAntiBodyInputs,
        },
        {
          id: "2",
          name: "had_covid",
          value: "no",
          label: "არა",
          click: this.hideAllAdditionalInputs,
        },
        {
          id: "3",
          name: "had_covid",
          value: "have_right_now",
          label: "ახლა მაქვს",
          click: this.hideAllAdditionalInputs,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="lg:mx-52">
    <RedberryHeader />
    <div class="flex mob:justify-center mob:mx-10">
      <Form @submit="onSubmit" id="form">
        <div class="flex flex-col mt-5">
          <h1 class="font-extrabold text-xl mb-3">
            გაქვს გადატანილი Covid-19?
          </h1>
          <radio-input
            :key="option.id"
            v-for="option in options"
            :name="option.name"
            :type="option.type"
            :value="option.value"
            :rules="option.rules"
            :placeholder="option.placeholder"
            :label="option.label"
            :click="option.click"
          />
          <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="had_covid" />
        </div>
        <AntiBodyInput v-if="this.$store.state.booleans.showAntiBody" />
      </Form>
      <div class="ml-96 mob:hidden">
        <img width="700" src="@/components/images/human2.png" alt="img" />
      </div>
    </div>
  </div>
  <div class="mob:mt-10 flex justify-center mob:justify-between mob:mx-40">
    <button @click="back">
      <img src="@/components/images/left.png" />
    </button>
    <button class="lg:mx-40" type="submit" form="form">
      <img src="@/components/images/right.png" />
    </button>
  </div>
</template>
