<template>
  <button
    class="flex h-8 w-[70px] items-center justify-center gap-1 rounded bg-white font-secondary text-lg text-black duration-100 hover:bg-sky-500 hover:text-white"
  >
    <span class="block size-6">
      <InfoIcon class="h-full w-full" />
    </span>
    Info
  </button>
</template>

<script setup>
import { InfoIcon } from '@/assets/icons'
</script>

<style></style>
