<template>
  <li
    class="flex h-10 w-full items-center border-b-2 border-slate-900 font-primary duration-75 md:w-fit md:hover:text-colorLogo lg:h-7 lg:w-fit lg:border-none"
    @click="toggleMenu"
  >
    <router-link :to="props.to" class="flex h-full w-full items-center gap-2.5 lg:justify-center">
      <slot></slot>
    </router-link>
  </li>
</template>

<script setup>
import { useToggleStore } from '@/stores/useToggle'

const { toggleMenu } = useToggleStore()

const props = defineProps({
  to: {
    type: String,
    default: '#'
  }
})
</script>
