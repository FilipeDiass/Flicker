<template>
  <div
    :class="{ inputAnimation: menu.search }"
    class="absolute left-0 top-16 flex h-0 w-full items-center overflow-hidden bg-slate-950 px-2.5 duration-200 lg:static lg:h-9 lg:w-[400px] lg:p-0"
  >
    <div
      class="flex h-10 w-full items-center overflow-hidden rounded text-lg lg:h-full lg:rounded-full lg:border-2 lg:border-slate-900 lg:px-1"
    >
      <input
        ref="input"
        type="text"
        placeholder="Pesquise"
        class="h-full w-full px-2.5 font-secondary outline-none lg:bg-transparent lg:text-white"
      />
      <button class="flex h-full w-10 items-center justify-center bg-white lg:bg-transparent">
        <SearchIcon class="size-7 stroke-gray-400 lg:size-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useToggleStore } from '@/stores/useToggle'
import { SearchIcon } from '@/assets/icons'
import { ref, watch } from 'vue'

const { menu } = useToggleStore()

const input = ref(null)
watch(
  () => menu.search,
  () => {
    if (menu.search) input.value.focus()
  }
)
</script>

<style scoped>
.inputAnimation {
  @apply h-14 lg:h-9 lg:w-96;
}
</style>
