<template>
  <div class="h-screen flex justify-center items-center">
    <h1 class="text-white lg:text-6xl tracking-widest text-5xl">
      მ ა დ ლ ო ბ ა
    </h1>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";

export default {
  methods: {
    sendData() {
      const obj = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        had_covid: this.had_covid,
        had_vaccine: this.hadVaccine,
        i_am_waiting: this.waiting,
        antibodies: {
          test_date: this.testDateCorrectReturn,
          number: parseInt(this.number) || undefined,
        },
        covid_sickness_date: this.covidDateCorrectReturn,
        had_antibody_test: this.antibodyTest,
        vaccination_stage: this.vaccinationStage,
        non_formal_meetings: this.non_formal_meetings,
        number_of_days_from_office: parseInt(this.daysFromOffice) || undefined,
        what_about_meetings_in_live: this.meetings,
        tell_us_your_opinion_about_us: this.opinion,
      };
      axios
        .post("https://covid19.devtest.ge/api/create", obj)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log(obj);
    },
  },
  computed: {
    testDateCorrectReturn() {
      if (this.testDate === "წწ-თთ-დდ") {
        return undefined;
      } else return this.testDate.replace(/-/g, "/");
    },
    covidDateCorrectReturn() {
      if (this.covidSickness === "წწ-თთ-დდ") {
        return undefined;
      } else return this.covidSickness.replace(/-/g, "/");
    },
    ...mapState("formData", [
      "first_name",
      "last_name",
      "email",
      "had_covid",
      "non_formal_meetings",
    ]),
    ...mapGetters("formData", [
      "covidSickness",
      "testDate",
      "number",
      "vaccinationStage",
      "waiting",
      "meetings",
      "opinion",
      "antibodyTest",
      "hadVaccine",
      "daysFromOffice",
    ]),
  },
  mounted() {
    this.sendData();
  },
};
</script>
<style>
html {
  background: #232323;
}
</style>
