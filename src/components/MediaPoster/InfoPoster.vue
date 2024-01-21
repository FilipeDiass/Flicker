<template>
  <h1
    class="line-clamp-2 h-fit w-full max-w-[570px] text-center font-primary text-2xl capitalize max-[425px]:hidden"
  >
    {{ title || name }}
  </h1>
  <p
    class="line-clamp-3 w-full max-w-[570px] text-center font-secondary text-lg max-[425px]:hidden"
  >
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
