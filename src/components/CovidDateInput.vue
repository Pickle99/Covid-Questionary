<template>
  <div class="mt-10">
    <h1 class="font-extrabold text-xl mb-3">
      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
    </h1>
    <div class="ml-5 mt-6">
      <div>
        <Field
          name="test_date"
          class="pl-4 pr-96 py-3 border-black border-2"
          type="text"
          rules="required"
          placeholder="დდ/თთ/წწ"
          onfocus="(this.type = 'date')"
          :model="this.$store.state.data.covid_sickness_date"
        />
      </div>
      <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="test_date" />
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    ErrorMessage,
  },
};
</script>
