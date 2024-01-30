<template>
  <section
    v-if="!searchResult || searchResult.length === 0"
    class="mt-16 flex h-[calc(100dvh-161.6px)] w-full items-center justify-center text-white"
  >
    <NotFound />
  </section>
  <section v-else class="m-auto mt-16 h-full w-full max-w-7xl p-2.5 text-white max-[319px]:h-full">
    <h1 class="m-auto mb-5 font-primary text-2xl">Search result:</h1>

    <router-link to="/info-media" class="size-fit">
      <div
        class="flex h-36 w-full max-w-xl cursor-pointer gap-2.5 rounded bg-slate-950 p-1.5 shadow-md max-[319px]:h-fit max-[319px]:flex-col min-[500px]:h-52"
        @click="mediaDetails(searchResult[0].media_type, searchResult[0].id)"
      >
        <picture
          class="flex h-full min-h-[132px] w-[88px] flex-shrink-0 overflow-hidden rounded max-[319px]:h-fit max-[319px]:w-full min-[500px]:w-32"
        >
          <div
            v-if="!searchResult[0].poster_path"
            class="flex size-full items-center justify-center bg-slate-900"
          >
            <ImageOffIcon class="size-10 stroke-slate-600 md:size-20" />
          </div>
          <img
            v-else
            :src="`https://image.tmdb.org/t/p/original${searchResult[0].poster_path}`"
            alt=""
            class="size-full object-cover"
          />
        </picture>
        <div class="flex flex-grow overflow-hidden rounded max-[319px]:h-fit max-[319px]:w-full">
          <h1
            class="flex size-full items-center justify-center text-center font-primary text-lg capitalize text-white lg:text-2xl"
          >
            {{ searchResult[0].title || searchResult[0].name }}
          </h1>
        </div>
      </div>
    </router-link>
    <OtherMedia />
  </section>
</template>

<script setup>
import { ImageOffIcon } from '@/assets/icons'
import { useMediaDetailsStore } from '@/stores/useMediaDetails'
import { OtherMedia, NotFound } from '@/components/OtherMedia'
import { useSearchStore } from '@/stores/useSearch'
import { storeToRefs } from 'pinia'

window.scrollTo(0, 0)

const store = useSearchStore()
const { searchResult } = storeToRefs(store)

const { mediaDetails } = useMediaDetailsStore()
localStorage.clear()
</script>

<!-- h-[calc(100dvh-161.6px)] -->
