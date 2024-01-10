<template>
  <section class="relative flex h-96 w-full items-end overflow-hidden md:h-[520px] lg:h-[600px]">
    <ImageBanner :media-info="trendInfo" />
    <InfoBox>
      {{ trendInfo.title }}
    </InfoBox>
  </section>
  <Suspense>
    <VideoTrailer v-if="storeTrailer.trailer" :media-info="trendInfo" />
  </Suspense>
</template>

<script setup>
import { ImageBanner, InfoBox } from '@/components/TrendBanner'
import { useTrendsMediaStore } from '@/stores/useTrendsMedia'
import { useToggleStore } from '@/stores/useToggle'
import { VideoTrailer } from '@/components/app'
import { reactive } from 'vue'

const storeTrailer = useToggleStore()

const store = useTrendsMediaStore()
if (!store.objectTrends) await store.trendsMedia()

const arrayTrends = store.objectTrends.results.slice(0, 10)
const trend = arrayTrends[store.randomNumber]

const trendInfo = reactive({
  title: trend.title || trend.name,
  banner: trend.backdrop_path,
  mediaType: trend.media_type,
  id: trend.id
})
</script>
