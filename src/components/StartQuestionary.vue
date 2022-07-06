<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <img src="@/assets/icons/red-circle.svg" alt="img" />
    <RouterLink
      class="mt-20 font-extrabold text-2xl w-52 text-center"
      :to="{ name: 'first' }"
      >კითხვარის დაწყება</RouterLink
    >
  </div>
</template>
