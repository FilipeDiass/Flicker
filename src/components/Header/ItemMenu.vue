<template>
  <li
    class="flex h-10 w-full items-center border-b-2 border-slate-900 font-primary lg:h-7 lg:w-fit lg:border-none"
  >
    <router-link :to="props.to" class=":justify-center flex h-full w-full items-center gap-2.5">
      <slot></slot>
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: '#'
  }
})
</script>
