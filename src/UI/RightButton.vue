<template>
  <button @click="onClick" :disabled="isDisabled" :class="class">
    <img src="@/components/images/right.png" />
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
