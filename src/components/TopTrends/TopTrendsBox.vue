<template>
  <section
    class="my-5 flex h-fit w-full flex-col items-center justify-center gap-6 rounded bg-slate-800/50 px-5 py-2.5 shadow-lg lg:h-60 lg:flex-row lg:gap-0 lg:py-0 xl:px-0 xl:ps-10"
  >
    <div class="flex h-fit w-full flex-nowrap items-center rounded lg:h-full lg:w-3/12">
      <h1 class="font-primary text-3xl capitalize text-white lg:text-4xl xl:text-5xl">
        <strong class="lg:text-6xl lg:text-colorLogo lg:underline xl:text-7xl">Top 10</strong>
        Trends in
        <br class="hidden lg:block" />
        the world!
      </h1>
    </div>
    <suspense>
      <TrendCards />
    </suspense>
  </section>
</template>

<script setup>
import { TrendCards } from '@/components/TopTrends'
</script>

<style></style>
