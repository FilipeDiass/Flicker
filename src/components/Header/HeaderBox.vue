<template>
  <div class="flex h-full w-full max-w-7xl items-center justify-between">
    <LogoSite class="cursor-pointer" />
    <div class="flex h-full items-center gap-3">
      <InputHeader :active="menu" />
      <button class="flex h-7 w-7 items-center lg:hidden" @click="toggleMenu('search')">
        <SearchIcon class="h-7 w-7 rotate-90 cursor-pointer stroke-white" />
      </button>
      <MenuButton :active="menu" class="md:hidden" @click="toggleMenu('burguer')" />
      <slot :active="menu"></slot>
    </div>
  </div>
</template>

<script setup>
import { LogoSite, SearchIcon } from '@/assets/icons'
import { MenuButton, InputHeader } from '@/components/Header'
import { reactive } from 'vue'

const menu = reactive({})

function toggleMenu(property) {
  Object.keys(menu).includes(property) ? null : (menu[property] = false)

  for (const key of Object.keys(menu)) {
    if (key === property) {
      menu[key] = !menu[key]
    } else {
      menu[key] = false
    }
  }
}
</script>
