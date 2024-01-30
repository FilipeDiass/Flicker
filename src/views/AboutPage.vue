<template>
  <div class="m-auto mt-16 flex h-full w-full max-w-7xl flex-col gap-5 p-2.5 xl:p-0">
    <ProjectGoal />
    <TechnologiesUsed />
    <ApiCredits />
  </div>
</template>

<script setup>
import { TechnologiesUsed, ProjectGoal, ApiCredits } from '@/components/AboutPage'
</script>
