<template>
  <div class="mob:mx-10">
    <div class="flex justify-between mt-20 p-2">
      <img src="../components/images/redberry.png" alt="img" />
      <p class="font-extrabold text-3xl">{{ page }}/4</p>
    </div>
    <div class="mt-2 border-black border-b-2"></div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>
