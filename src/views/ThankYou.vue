<template>
  <div class="h-screen flex justify-center items-center">
    <h1 class="text-white text-6xl tracking-widest">მ ა დ ლ ო ბ ა</h1>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";

export default {
  // data() {
  //   return {
  //     dataObject: {
  //       first_name: this.$store.state.data.first_name,
  //       last_name: this.$store.state.data.last_name,
  //       email: this.$store.state.data.email,
  //       had_covid: this.$store.state.data.had_covid,
  //       had_vaccine: this.$store.state.data.had_vaccine,
  //       i_am_waiting: this.$store.state.data.i_am_waiting,
  //       antibodies: {
  //         test_date: this.$store.state.data.test_date.replace(/-/g, "/"),
  //         number: this.$store.state.data.number,
  //       },
  //       covid_sickness_date: this.$store.state.data.covid_sickness_date.replace(
  //         /-/g,
  //         "/"
  //       ),
  //       had_antibody_test: this.$store.state.data.had_antibody_test,
  //       vaccination_stage: this.$store.state.data.vaccination_stage,
  //       non_formal_meetings: this.$store.state.data.non_formal_meetings,
  //       number_of_days_from_office:
  //         this.$store.state.data.number_of_days_from_office,
  //       what_about_meetings_in_live:
  //         this.$store.state.data.what_about_meetings_in_live,
  //       tell_us_your_opinion_about_us:
  //         this.$store.state.data.tell_us_your_opinion_about_us,
  //     },
  //   };
  // },
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
    ...mapState(["data"]),
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
