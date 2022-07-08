<template>
  <button @click="back">
    <img src="@/assets/icons/arrow-left.svg" />
  </button>
</template>

<script>
export default {
  props: {
    back: {
      type: Function,
      required: true,
    },
  },
};
</script>
