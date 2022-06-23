<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import AntiBodyInput from "@/components/AntiBodyInput.vue";
import { mapActions, mapState } from "vuex";

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
    ...mapActions(["hideAllAdditionalInputs"]),
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
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      had_covid: (state) => state.data.had_covid,
    }),
  },
};
</script>

<template>
  <div class="mx-52">
    <RedberryHeader />
    <div class="flex">
      <Form @submit="onSubmit" id="form">
        <div class="flex flex-col mt-5">
          <h1 class="font-extrabold text-xl mb-3">
            გაქვს გადატანილი Covid-19?
          </h1>
          <div class="flex flex-col ml-5">
            <div class="flex items-center">
              <Field
                name="had_covid"
                class="scale-125"
                type="radio"
                rules="required"
                value="yes"
                @input="updateData('had_covid', $event.target.value)"
                @click="this.$store.state.booleans.showAntiBody = true"
              />
              <label class="ml-5" for="had_covid">კი</label>
            </div>
            <div>
              <Field
                name="had_covid"
                class="my-3 scale-125"
                value="no"
                type="radio"
                rules="required"
                @input="updateData('had_covid', $event.target.value)"
                @click="hideAllAdditionalInputs"
              />
              <label class="ml-5" for="had_covid">არა</label>
            </div>
            <div class="flex items-center">
              <Field
                name="had_covid"
                class="scale-125"
                value="have_right_now"
                type="radio"
                rules="required"
                @input="updateData('had_covid', $event.target.value)"
                @click="hideAllAdditionalInputs"
              />
              <label class="ml-5" for="had_covid">ახლა მაქვს</label>
            </div>
            <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="had_covid" />
          </div>
        </div>
        <AntiBodyInput v-if="this.$store.state.booleans.showAntiBody" />
      </Form>
      <div class="ml-96">
        <img width="700" src="../components/images/human2.png" alt="img" />
      </div>
    </div>
    <div class="flex justify-center mb-32 mt-20" type="submit">
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
  </div>
</template>
