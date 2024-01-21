<template>
  <div class="h-full w-48 max-[425px]:h-72">
    <img
      class="size-full rounded object-cover"
      :src="`https://image.tmdb.org/t/p/original/${poster}`"
      alt=""
    />
  </div>
</template>

<script setup>
const props = defineProps({
  poster: {
    type: Object,
    default: () => ({})
  }
})
const { poster } = props.poster
</script>
