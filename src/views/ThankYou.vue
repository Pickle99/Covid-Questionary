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
        first_name: this.data.first_name,
        last_name: this.data.last_name,
        email: this.data.email,
        had_covid: this.data.had_covid,
        had_vaccine: this.hadVaccineGetter,
        i_am_waiting: this.waitingGetter,
        antibodies: {
          test_date: this.testDateGetter,
          number: this.numberGetter,
        },
        covid_sickness_date: this.covidSicknessGetter,
        had_antibody_test: this.antibodyTestGetter,
        vaccination_stage: this.vaccinationStageGetter,
        non_formal_meetings: this.data.non_formal_meetings,
        number_of_days_from_office: this.daysFromOfficeGetter,
        what_about_meetings_in_live: this.meetingsGetter,
        tell_us_your_opinion_about_us: this.opinionGetter,
      };
      axios
        .post("https://covid19.devtest.ge/api/create", obj)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log(obj);
    },
  },
  computed: {
    ...mapState("dataModule", ["data"]),
    ...mapGetters([
      "covidSicknessGetter",
      "testDateGetter",
      "numberGetter",
      "vaccinationStageGetter",
      "waitingGetter",
      "meetingsGetter",
      "opinionGetter",
      "antibodyTestGetter",
      "hadVaccineGetter",
      "daysFromOfficeGetter",
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
