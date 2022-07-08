<template>
  <button :disabled="isDisabled" :class="class" @click="onClick">
    <img src="@/assets/icons/arrow-right.svg" />
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true, 
    },
    isDisabled: {
      type: Boolean,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
};
</script>
