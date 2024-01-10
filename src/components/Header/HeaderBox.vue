<template>
  <div class="z-50 flex h-full w-full max-w-7xl items-center justify-between">
    <LogoSite class="cursor-pointer" />
    <div class="flex h-full items-center gap-3">
      <InputHeader />
      <button class="flex h-7 w-7 items-center lg:hidden" @click="toggleMenu('search')">
        <SearchIcon class="h-7 w-7 rotate-90 cursor-pointer stroke-white" />
      </button>
      <MenuButton class="md:hidden" @click="toggleMenu('burguer')" />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { MenuButton, InputHeader } from '@/components/Header'
import { LogoSite, SearchIcon } from '@/assets/icons'
import { useToggleStore } from '@/stores/useToggle'

const { toggleMenu } = useToggleStore()
</script>
