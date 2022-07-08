<template>
  <button v-if="previousPage" @click="back">
    <img src="@/assets/icons/arrow-left.svg" />
  </button>

  <button v-if="nextPage" :disabled="isDisabled" :class="isDisabled ? 'opacity-40 lg:mx-40' : 'opacity-100 lg:mx-40'" @click="onClick">
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
    back: {
      type: Function,
      required: false,
    },
    nextPage: {
      type: Boolean,
      required: true,
    },
    previousPage: {
      type:Boolean,
      required: true,
    }
  }
};
</script>