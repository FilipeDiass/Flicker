<template>
  <header class="z-50 flex h-16 w-full items-center justify-center bg-slate-950 p-3">
    <HeaderBox v-slot="{ active }">
      <NavBar :menu="active">
        <ItemMenu to="/"> <HomeIcon class="size-7 md:hidden" /> Home </ItemMenu>
        <ItemMenu> <WindowIcon class="size-7 md:hidden" /> About The Project </ItemMenu>
        <ItemMenu> <ContactIcon class="size-7 md:hidden" /> Contact </ItemMenu>
      </NavBar>
    </HeaderBox>
  </header>

  <main class="m-auto w-full max-w-7xl">
    <router-view></router-view>
  </main>

  <!-- <footer></footer> -->
</template>

<script setup>
import { HomeIcon, WindowIcon, ContactIcon } from './assets/icons'
import { HeaderBox, NavBar, ItemMenu } from './components/Header'
</script>

<style></style>
