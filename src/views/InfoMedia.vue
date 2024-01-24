<template>
  <section v-if="store.media === null" class="m-auto mt-16 w-full max-w-7xl">Carregando...</section>
  <section v-else class="m-auto mt-16 flex h-fit w-full max-w-7xl flex-col">
    <InitialInfo :info-media="{ media: store.media, type: store.mediaType }"></InitialInfo>
    <div class="h-fit w-full space-y-2 px-2.5 text-white">
      <h1 class="font-primary text-xl">synopsis</h1>
      <p class="h-fit w-full font-secondary text-sm">
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
import { useMediaDetailsStore } from '@/stores/useMediaDetails'
import { InitialInfo, OtherInformation, MediaCast } from '@/components/InfoMedia'

const store = useMediaDetailsStore()
</script>
