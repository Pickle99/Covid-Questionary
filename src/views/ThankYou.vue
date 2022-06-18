<template>
  <div class="h-screen flex justify-center items-center">
    <h1 class="text-white text-6xl tracking-widest">მ ა დ ლ ო ბ ა</h1>
  </div>
</template>
<script>
// import axios from "axios";
import axios from "axios";

export default {
  methods: {
    sendData() {
      axios
        .post("https://covid19.devtest.ge/api/create", this.$store.state.data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log(this.$store.state.data);
    },
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
