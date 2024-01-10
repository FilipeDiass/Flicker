<template>
  <button
    :class="{ menuAnimation: menu.burguer }"
    class="relative flex h-7 w-7 items-center before:absolute before:left-0 before:top-[3px] before:h-1 before:w-full before:rounded before:bg-white before:duration-300 after:absolute after:bottom-0.5 after:left-0 after:h-1 after:w-full after:rounded after:bg-white after:duration-300"
  >
    <span
      :class="{ disappearLine: menu.burguer }"
      class="h-1 w-full rounded bg-white duration-200"
    ></span>
  </button>
</template>

<script setup>
import { useToggleStore } from '@/stores/useToggle'

const { menu } = useToggleStore()
</script>

<style scoped>
.menuAnimation {
  @apply before:top-[12.5px] before:rotate-[-315deg] after:bottom-3 after:rotate-[-225deg];
}
.disappearLine {
  @apply invisible opacity-0;
}
</style>
