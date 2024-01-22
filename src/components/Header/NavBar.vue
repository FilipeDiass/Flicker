<template>
  <nav
    :class="{ navAnimation: menu.burguer }"
    class="absolute left-0 top-16 h-0 w-full overflow-hidden bg-slate-950 text-white duration-300 md:static md:flex md:h-7 md:w-fit md:items-center md:bg-transparent"
  >
    <ul
      class="m-auto h-full max-w-7xl space-y-5 p-2.5 text-white md:flex md:items-center md:gap-6 md:space-y-0"
    >
      <slot></slot>
    </ul>
  </nav>
</template>

<script setup>
import { useToggleStore } from '@/stores/useToggle'

const { menu } = useToggleStore()
</script>

<style scoped>
.navAnimation {
  @apply h-[calc(100dvh-64px)] md:h-7;
}
</style>
