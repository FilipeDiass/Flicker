<template>
  <div class="relative h-fit w-full">
    <img
      :src="`https://image.tmdb.org/t/p/original/${media.backdrop_path}`"
      :alt="media.title || media.name"
      class="absolute -z-10 flex h-44 w-full object-cover text-white"
    />
    <div
      class="relative flex h-fit w-full flex-col before:absolute before:left-0 before:top-[168px] before:h-2 before:w-full before:bg-gradient-to-t before:from-slate-900"
    >
      <picture
        class="flex h-44 w-fit items-center justify-center bg-gradient-to-r from-black/75 from-70% px-2.5"
      >
        <img
          :src="`https://image.tmdb.org/t/p/original/${media.poster_path}`"
          :alt="media.title || media.name"
          class="h-40 w-fit rounded object-cover shadow-md shadow-black"
        />
      </picture>
      <div class="my-2.5 flex h-fit w-full flex-col gap-2.5 px-2.5">
        <h1 class="line-clamp-2 h-fit w-full font-primary text-xl text-white">
          {{ media.title || media.name }}
        </h1>
        <div class="flex h-fit w-full flex-wrap items-center gap-5 font-secondary text-white">
          <TrailerButton @click="toggleTrailer" />
          <button class="flex h-8 w-fit items-center justify-center gap-1.5">
            <TimeIcon v-if="media.runtime" class="size-7" />
            <SeasonsIcon v-else class="size-7" />
            {{ media.runtime ? timeMovie : media.number_of_seasons }}
          </button>
          <button class="flex h-8 w-fit items-center justify-center gap-1.5">
            <CalendarIcon class="size-7" />
            {{ releaseDate }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <Suspense>
    <VideoTrailer
      v-if="activeTrailer"
      :toggle="toggleTrailer"
      :media-info="{ id: media.id, mediaType: type }"
    />
  </Suspense>
</template>

<script setup>
import { TimeIcon, CalendarIcon, SeasonsIcon } from '@/assets/icons'
import { TrailerButton, VideoTrailer } from '../app'
import { ref } from 'vue'

const props = defineProps({
  infoMedia: {
    type: Object,
    default: () => ({})
  }
})
const { media, type } = props.infoMedia

const timeMovie = `${Math.floor(media.runtime / 60)}h ${media.runtime % 60}m`
const releaseDate = (media.release_date || media.first_air_date).slice(0, 4)
// number_of_seasons
const activeTrailer = ref(false)
function toggleTrailer() {
  activeTrailer.value = !activeTrailer.value
}
</script>
