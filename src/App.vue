<template>
  <header class="fixed top-0 z-50 flex h-16 w-full items-center justify-center bg-slate-950 p-3">
    <HeaderBox>
      <NavBar>
        <ItemMenu to="/"> <HomeIcon class="size-7 md:hidden" /> Home </ItemMenu>
        <ItemMenu to="/about"> <WindowIcon class="size-7 md:hidden" /> About The Project </ItemMenu>
      </NavBar>
    </HeaderBox>
  </header>

  <router-view class="min-h-[calc(100dvh-161.6px)]" />

  <FooterBox />
</template>

<script setup>
import { HomeIcon, WindowIcon } from './assets/icons'
import { HeaderBox, NavBar, ItemMenu } from './components/Header'
import { FooterBox } from '@/components/Footer'
</script>

<style></style>
