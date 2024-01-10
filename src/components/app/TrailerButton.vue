<template>
  <button class="group flex h-8 items-center gap-1.5 font-secondary" @click="toggleTrailer">
    <span class="block size-7">
      <PlayIcon class="h-full w-full fill-white stroke-white group-hover:fill-sky-500" />
    </span>
    <p class="text-lg text-white group-hover:underline">Play Trailer</p>
  </button>
</template>

<script setup>
import { useToggleStore } from '@/stores/useToggle'
import { PlayIcon } from '@/assets/icons'

const { toggleTrailer } = useToggleStore()
</script>

<style></style>
