<template>
  <main class="m-auto mt-16 w-full max-w-7xl">
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

    <Suspense>
      <template #default>
        <PopularMedia media="tv"> Popular Series! </PopularMedia>
      </template>
      <template #fallback>
        <LoadingPopularMedia> Popular Series! </LoadingPopularMedia>
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <PopularMedia media="movie"> Popular Movies! </PopularMedia>
      </template>
      <template #fallback>
        <LoadingPopularMedia> Popular Movies! </LoadingPopularMedia>
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <MediaPoster media="movie" />
      </template>
      <template #fallback>
        <LoadingMediaPoster />
      </template>
    </Suspense>
  </main>
</template>

<script setup>
import { MediaPoster, LoadingMediaPoster } from '@/components/MediaPoster'
import { TrendBanner, LoadingTrend } from '@/components/TrendBanner'
import { PopularMedia, LoadingPopularMedia } from '@/components/PopularMedia'
import { TopTrendsBox } from '@/components/TopTrends'
</script>

<style></style>
