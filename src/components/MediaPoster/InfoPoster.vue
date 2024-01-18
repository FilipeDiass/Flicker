<template>
  <h1 class="line-clamp-2 h-fit w-full max-w-[570px] text-center font-primary text-2xl capitalize">
    {{ title || name }}
  </h1>
  <p class="line-clamp-3 w-full max-w-[570px] text-center font-secondary text-lg">
    {{ overview || 'No description' }}
  </p>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
const { title, name, overview } = props.info
</script>
