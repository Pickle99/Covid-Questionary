<template>
  <h1>Hello its page 2</h1>
  <button @click="back">back</button>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push({ name: "first" });
    },
  },
};
</script>
