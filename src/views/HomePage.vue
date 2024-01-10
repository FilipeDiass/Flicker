<template>
  <Suspense>
    <template #default>
      <TrendBanner />
    </template>
    <template #fallback>
      <LoadingTrend />
    </template>
  </Suspense>
</template>

<script setup>
import { TrendBanner, LoadingTrend } from '@/components/TrendBanner'
</script>

<style></style>
