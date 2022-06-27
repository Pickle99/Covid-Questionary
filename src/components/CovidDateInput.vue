<template>
  <div class="mt-10">
    <h1 class="font-extrabold text-xl mb-3">
      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
    </h1>
    <div class="ml-5 mt-6">
      <div>
        <Field
          name="covid_sickness_date"
          class="pl-4 lg:w-[33rem] py-3 border-black border-2 mob:w-72"
          rules="required"
          type="date"
          :value="data.covid_sickness_date"
          @input="updateData('covid_sickness_date', $event.target.value)"
        />
      </div>
      <ErrorMessage
        class="ml-5 mt-1 text-[#F15524]"
        name="covid_sickness_date"
      />
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { mapState } from "vuex";
export default {
  components: {
    Field,
    ErrorMessage,
  },
  methods: {
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("dataModule/updateField", {
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
  computed: {
    ...mapState("dataModule", ["data"]),
  },
};
</script>
