<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import AntiBodyInput from "@/components/AntiBodyInput.vue";
import { mapActions } from "vuex";
export default {
  methods: {
    back() {
      this.$router.push({ name: "first" });
      this.$store.state.count--;
    },
    onSubmit(values) {
      console.log(values, null, 2);
      this.$store.state.count++;
      this.$router.push({ name: "third" });
    },
    ...mapActions(["hideAllAdditionalInputs"]),
  },
  components: {
    RedberryHeader,
    AntiBodyInput,
    Form,
    Field,
    ErrorMessage,
  },
};
</script>

<template>
  <div class="mx-52">
    <RedberryHeader />
    <div>
      <Form @submit="onSubmit">
        <div class="flex flex-col mt-5">
          <h1 class="font-extrabold text-xl mb-3">
            გაქვს გადატანილი Covid-19?
          </h1>
          <div class="flex flex-col ml-5">
            <div class="flex items-center">
              <Field
                name="had_covid"
                class="scale-125"
                value="yes"
                type="radio"
                rules="required"
                :model="this.$store.state.data.had_covid"
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
                :model="this.$store.state.data.had_covid"
                @click="hideAllAdditionalInputs"
              />
              <label class="ml-5" for="had_covid">არა</label>
            </div>
            <div class="flex items-center">
              <Field
                name="had_covid"
                class="scale-125"
                value="now"
                type="radio"
                rules="required"
                :model="this.$store.state.data.had_covid"
                @click="hideAllAdditionalInputs"
              />
              <label class="ml-5" for="had_covid">ახლა მაქვს</label>
            </div>
            <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="had_covid" />
          </div>
        </div>
        <AntiBodyInput v-if="this.$store.state.booleans.showAntiBody" />
        <div class="mt-96">
          <button @click="back">
            <img src="../components/images/left.png" alt="img" />
          </button>
          <button class="ml-10" type="submit">
            <img src="../components/images/right.png" alt="img" />
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
