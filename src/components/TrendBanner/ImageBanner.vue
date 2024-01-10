<template>
  <picture
    class="absolute h-full w-full select-none before:absolute before:bottom-0 before:h-10 before:w-full before:bg-gradient-to-t before:from-slate-900 before:from-10% before:via-slate-900/85 before:via-40%"
  >
    <img :src="urlImage" :alt="title" class="h-full w-full object-cover object-center" />
  </picture>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  mediaInfo: {
    type: Object,
    default: () => ({})
  }
})
const { banner, title } = props.mediaInfo

const urlImage = computed(() => {
  return `https://image.tmdb.org/t/p/original/${banner}`
})
</script>
