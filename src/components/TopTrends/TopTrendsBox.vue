<template>
  <section
    class="my-5 flex h-fit w-full flex-col items-center justify-center gap-6 rounded px-5 py-2.5 lg:h-60 lg:flex-row lg:gap-0 lg:bg-slate-800/50 lg:py-0 lg:shadow-lg xl:px-0 xl:ps-10"
  >
    <div class="flex h-fit w-full flex-nowrap items-center rounded lg:h-full lg:w-3/12">
      <h1 class="font-primary text-2xl capitalize text-white md:text-3xl lg:text-4xl xl:text-5xl">
        <strong class="lg:text-6xl lg:text-colorLogo lg:underline xl:text-7xl">Top 10</strong>
        Trends in
        <br class="hidden lg:block" />
        the world!
      </h1>
    </div>
    <suspense>
      <template #default>
        <TrendCards />
      </template>
      <template #fallback>
        <LoadingTrendCards />
      </template>
    </suspense>
  </section>
</template>

<script setup>
import { TrendCards, LoadingTrendCards } from '@/components/TopTrends'
</script>

<style></style>
