<template>
  <h1 class="mb-5 mt-20 font-primary text-2xl">Other results:</h1>
  <div class="flex h-fit w-full flex-wrap justify-between gap-5">
    <router-link
      v-for="media in otherMedia"
      :key="media.id"
      to="/info-media"
      class="flex h-36 w-full max-w-xl cursor-pointer gap-2.5 rounded bg-slate-950 p-1.5 shadow-md max-[319px]:h-fit max-[319px]:flex-col min-[500px]:h-52"
      @click="mediaDetails(media.media_type, media.id)"
    >
      <picture
        class="flex h-full w-[88px] flex-shrink-0 overflow-hidden rounded max-[319px]:h-fit max-[319px]:w-full min-[500px]:w-32"
      >
        <div
          v-if="!media.poster_path"
          class="flex size-full items-center justify-center bg-slate-900"
        >
          <ImageOffIcon class="size-full stroke-slate-600" />
        </div>

        <img
          v-else
          :src="`https://image.tmdb.org/t/p/original${media.poster_path}`"
          :alt="media.title || media.name"
          class="size-full object-cover text-white"
        />
      </picture>
      <div class="flex flex-grow overflow-hidden rounded max-[319px]:h-fit max-[319px]:w-full">
        <h1
          class="flex size-full items-center justify-center text-center font-primary text-lg capitalize text-white lg:text-2xl"
        >
          {{ media.title || media.name }}
        </h1>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { useMediaDetailsStore } from '@/stores/useMediaDetails'
import { useSearchStore } from '@/stores/useSearch'
import { ImageOffIcon } from '@/assets/icons'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useSearchStore()
const { searchResult } = storeToRefs(store)
const otherMedia = computed(() => searchResult.value.filter((el, i) => i !== 0))

const { mediaDetails } = useMediaDetailsStore()
</script>

<style scoped></style>
