<template>
  <section v-if="store.media === null" class="m-auto mt-16 w-full max-w-7xl">
    <LoadingInfoMedia />
  </section>
  <section v-else class="m-auto mt-16 flex h-fit w-full max-w-7xl flex-col">
    <InitialInfo :info-media="{ media: store.media, type: store.mediaType }"></InitialInfo>
    <div class="h-fit w-full space-y-2 px-2.5 text-white md:mt-2.5 xl:p-0">
      <h1 class="font-primary text-2xl md:text-3xl">synopsis</h1>
      <p class="h-fit w-full font-secondary md:text-lg">
        {{ store.media.overview }}
      </p>
    </div>
    <OtherInformation :info-media="store.media" />
    <Suspense>
      <MediaCast :info-media="{ media: store.media, type: store.mediaType }" />
    </Suspense>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useMediaDetailsStore } from '@/stores/useMediaDetails'
import { InitialInfo, OtherInformation, MediaCast, LoadingInfoMedia } from '@/components/InfoMedia'

window.scrollTo(0, 0)
const store = useMediaDetailsStore()

watch(
  () => store.media,
  (value) => {
    if (value) {
      localStorage.setItem('mediaId', store.media.id)
      localStorage.setItem('mediaType', store.mediaType)
    }
  }
)
onMounted(async () => {
  if (!store.media) {
    const mediaId = localStorage.getItem('mediaId')
    const mediaType = localStorage.getItem('mediaType')
    await store.mediaDetails(mediaType, mediaId)
  }
})
onUnmounted(() => {
  store.media = null
})
</script>
