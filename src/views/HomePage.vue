<template>
  <Suspense>
    <template #default>
      <TrendBanner />
    </template>
    <template #fallback>
      <LoadingTrend />
    </template>
  </Suspense>
  <TopTrendsBox />
</template>

<script setup>
import { TrendBanner, LoadingTrend } from '@/components/TrendBanner'
import { TopTrendsBox } from '@/components/TopTrends'
</script>

<style></style>
