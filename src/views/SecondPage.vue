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
    Field,
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
          type: "radio",
          value: "yes",
          rules: "required",
          label: "კი",
          click: this.showAntiBodyInputs,
        },
        {
          id: "2",
          name: "had_covid",
          type: "radio",
          value: "no",
          rules: "required",
          label: "არა",
          click: this.hideAllAdditionalInputs,
        },
        {
          id: "3",
          name: "had_covid",
          type: "radio",
          value: "have_right_now",
          rules: "required",
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
