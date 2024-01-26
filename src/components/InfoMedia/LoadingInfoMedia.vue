<template>
  <div
    class="flex h-44 w-full animate-pulse items-center bg-slate-800 object-cover px-2.5 text-white min-[375px]:h-64 min-[540px]:h-96 min-[840px]:h-[500px] lg:h-[540px]"
  ></div>
  <div class="mt-5 flex h-[500px] w-full animate-pulse gap-2.5 bg-slate-800 p-2.5"></div>
  <div class="my-5 flex h-fit w-full gap-5 overflow-hidden px-2.5 xl:p-0">
    <div
      v-for="i in 10"
      :key="i"
      class="flex h-72 w-32 flex-shrink-0 animate-pulse overflow-hidden rounded bg-slate-800 md:h-80 md:w-40"
    ></div>
  </div>
</template>

<script setup></script>

<style scoped></style>
