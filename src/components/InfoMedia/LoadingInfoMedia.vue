<template>
  <div
    class="flex h-44 w-full animate-pulse items-center bg-slate-800 object-cover px-2.5 text-white min-[375px]:h-64 min-[540px]:h-96 min-[840px]:h-[500px] lg:h-[540px]"
  ></div>
  <div class="mt-5 flex h-fit w-full animate-pulse gap-2.5 bg-slate-800 p-2.5">
    <div class="h-14 w-full animate-pulse rounded bg-slate-600"></div>
  </div>
  <div class="flex h-fit w-full animate-pulse gap-2.5 bg-slate-800 p-2.5">
    <div class="h-14 w-2/4 animate-pulse rounded bg-slate-600"></div>
    <div class="h-14 w-1/4 animate-pulse rounded bg-slate-600"></div>
    <div class="h-14 w-1/4 animate-pulse rounded bg-slate-600"></div>
  </div>
  <div class="flex h-fit w-full animate-pulse gap-2.5 bg-slate-800 p-2.5">
    <div class="h-14 w-1/2 animate-pulse rounded bg-slate-600"></div>
    <div class="h-14 w-1/2 animate-pulse rounded bg-slate-600"></div>
  </div>
  <div class="flex h-fit w-full animate-pulse gap-2.5 bg-slate-800 p-2.5">
    <div class="h-72 w-full animate-pulse rounded bg-slate-600"></div>
  </div>

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
