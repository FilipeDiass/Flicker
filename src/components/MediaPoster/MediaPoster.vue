<template>
  <section class="my-5 h-fit w-full p-2.5 xl:p-0">
    <swiper-container
      ref="swiper"
      class="w-full"
      v-bind="swiperParams"
      @swiperreachend="onReachEnd"
    >
      <swiper-slide v-for="el in arrayMedia" :key="el.id" class="max-w-[830px]">
        <div
          class="flex size-full flex-col items-center gap-2.5 rounded bg-slate-950 p-2.5 shadow-md shadow-black min-[425px]:flex-row"
        >
          <ImagePoster :poster="{ poster: el.poster_path }" />
          <div class="flex h-full w-full flex-col items-center justify-center gap-2.5 text-white">
            <InfoPoster :info="el" />
            <div class="mt-2 flex items-end justify-center gap-10">
              <InfoButton />
              <TrailerButton @click="toggleTrailer(el.id)" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </section>
  <Suspense>
    <VideoTrailer
      v-if="activeTrailer"
      :toggle="toggleTrailer"
      :media-info="{ id: trailerId, mediaType: props.media }"
    />
  </Suspense>
</template>

<script setup>
import { ImagePoster, InfoPoster } from '@/components/MediaPoster'
import { InfoButton, TrailerButton } from '@/components/app'
import { useTopRatedStore } from '@/stores/useTopRated'
import { VideoTrailer } from '@/components/app'
import { ref, reactive } from 'vue'

const props = defineProps({
  media: {
    type: String,
    default: ''
  }
})

const arrayMedia = ref(null)

const store = useTopRatedStore()

const keyTv = store.series.length === 0
const keyMovie = store.movies.length === 0

if (props.media === 'tv' && keyTv) await store.topRatedSerie(1)
if (props.media === 'movie' && keyMovie) await store.topRatedMovie(1)

arrayMedia.value = props.media === 'tv' ? store.series : store.movies

const swiper = ref(null)
const page = store.nextPage
async function onReachEnd() {
  props.media === 'tv' ? page.tv++ : page.movie++

  if (props.media === 'tv') await store.topRatedSerie(page.tv)
  if (props.media === 'movie') await store.topRatedMovie(page.movie)

  swiper.value.swiper.update()
}

const trailerId = ref(null)
const activeTrailer = ref(false)
function toggleTrailer(id) {
  trailerId.value = id
  activeTrailer.value = !activeTrailer.value
}

const swiperParams = reactive({
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: true
})
</script>
