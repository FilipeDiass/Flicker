<template>
  <nav
    :class="{ navAnimation: props.menu.burguer }"
    class="absolute left-0 top-16 h-0 w-full overflow-hidden bg-slate-950 text-white duration-300"
  >
    <ul class="m-auto h-full max-w-7xl space-y-5 p-2.5 text-white">
      <slot></slot>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  menu: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
.navAnimation {
  @apply h-[calc(100dvh-64px)];
}
</style>
