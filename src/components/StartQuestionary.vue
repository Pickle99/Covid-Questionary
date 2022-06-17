<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <img
      v-if="$route.path === '/'"
      to="/1"
      src="../components/images/Vector.png"
      alt="img"
    />
    <RouterLink
      class="mt-20 font-extrabold text-2xl w-52 text-center"
      v-if="$route.path === '/'"
      to="/1"
      >კითხვარის დაწყება</RouterLink
    >
    <RouterView />
  </div>
</template>
