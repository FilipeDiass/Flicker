<template>
  <header class="z-50 flex h-16 w-full items-center justify-center bg-slate-950 p-3">
    <HeaderBox v-slot="{ active }">
      <NavBar :menu="active">
        <ItemMenu>
          <!-- <RouterLink to="/"></RouterLink> -->
          <HomeIcon class="size-7" />Home
        </ItemMenu>
        <ItemMenu>
          <!-- <RouterLink to="/"></RouterLink> -->
          <WindowIcon class="size-7" />About The Project
        </ItemMenu>
        <ItemMenu>
          <!-- <RouterLink to="/"></RouterLink> -->
          <ContactIcon class="size-7" />Contact
        </ItemMenu>
      </NavBar>
    </HeaderBox>
  </header>
  <!-- <RouterView /> -->
  <!-- <footer></footer> -->
</template>

<script setup>
import { HomeIcon, WindowIcon, ContactIcon } from './assets/icons'
import { HeaderBox, NavBar, ItemMenu } from './components/Header'
</script>

<style></style>
