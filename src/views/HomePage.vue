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

  <Suspense>
    <template #default>
      <MediaPoster media="tv" />
    </template>
    <template #fallback>
      <LoadingMediaPoster />
    </template>
  </Suspense>

  <!-- <Suspense>
    <PopularMedia> Popular Series! </PopularMedia>
  </Suspense> -->
</template>

<script setup>
import { MediaPoster, LoadingMediaPoster } from '@/components/MediaPoster'
import { TrendBanner, LoadingTrend } from '@/components/TrendBanner'
// import { PopularMedia } from '@/components/PopularMedia'
import { TopTrendsBox } from '@/components/TopTrends'
</script>

<style></style>
