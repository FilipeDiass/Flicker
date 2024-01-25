<template>
  <picture
    class="flex h-full w-48 items-center justify-center rounded max-[425px]:h-72 max-[425px]:bg-slate-700 min-[850px]:bg-slate-700"
  >
    <img
      v-if="poster"
      class="size-full rounded object-cover"
      :src="`https://image.tmdb.org/t/p/original/${poster}`"
      alt="poster"
    />
    <ImageOffIcon v-else class="size-16 stroke-slate-600" />
  </picture>
</template>

<script setup>
import { ImageOffIcon } from '@/assets/icons'

const props = defineProps({
  poster: {
    type: Object,
    default: () => ({})
  }
})
const { poster } = props.poster
</script>
