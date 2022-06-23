<template>
  <div class="mob:mx-10">
    <div class="flex justify-between mt-20 p-2">
      <img to="/1" src="../components/images/redberry.png" alt="img" />
      <p class="font-extrabold text-3xl">{{ this.$store.state.count }}/4</p>
    </div>
    <div class="mt-2 border-black border-b-2"></div>
  </div>
</template>
