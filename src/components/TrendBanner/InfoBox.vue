<template>
  <div
    class="z-0 mb-10 flex h-fit w-9/12 max-w-80 flex-col gap-2.5 overflow-hidden rounded-e-md bg-black/80 px-2.5 py-1.5 md:mb-20 md:max-w-sm md:pe-5"
  >
    <h1 class="line-clamp-2 w-full font-primary text-2xl capitalize text-white">
      <slot></slot>
    </h1>
    <div class="flex h-10 w-full items-center gap-2.5">
      <InfoButton class="md:w-20" />
      <TrailerButton />
    </div>
  </div>
</template>

<script setup>
import { InfoButton, TrailerButton } from '@/components/app'
</script>

<style></style>
