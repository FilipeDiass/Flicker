<template>
  <section class="my-5 flex h-fit w-full flex-col gap-5 overflow-hidden p-2.5 xl:p-0">
    <div class="flex h-fit w-full flex-wrap items-center justify-between gap-5">
      <h1 class="font-primary text-2xl text-white lg:text-3xl">
        <slot />
      </h1>
      <picture class="flex h-full w-36 items-center justify-center lg:w-44">
        <a href="https://www.themoviedb.org/" target="_blank" class="size-full">
          <img src="/TheMovieDB.svg" alt="Logo TheMovieDB" class="size-full" />
        </a>
      </picture>
    </div>
    <div class="flex w-full flex-grow items-center justify-center">
      <swiper-container
        ref="swiper"
        class="size-full"
        v-bind="swiperParams"
        @swiperreachend="onReachEnd"
      >
        <swiper-slide
          v-for="el in popularMedia"
          :key="el.id"
          class="flex max-w-32 items-center justify-center lg:max-w-40"
        >
          <router-link to="/info-media" class="h-48 w-32 lg:h-60 lg:w-40">
            <picture
              class="flex h-48 w-32 flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded bg-slate-950 lg:h-60 lg:w-40"
              @click="mediaDetails(props.media, el.id)"
            >
              <img
                v-if="el.poster_path"
                class="size-full rounded object-cover text-white"
                :src="`https://image.tmdb.org/t/p/original/${el.poster_path}`"
                :alt="el.title || el.name"
              />
              <ImageOffIcon v-else class="size-20 stroke-slate-600" />
            </picture>
          </router-link>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup>
import { usePopularMediaStore } from '@/stores/usePopularMedia'
import { useMediaDetailsStore } from '@/stores/useMediaDetails'
import { ImageOffIcon } from '@/assets/icons'
import { ref, reactive } from 'vue'

const props = defineProps({
  media: {
    type: String,
    default: ''
  }
})

const popularMedia = ref(null)

const store = usePopularMediaStore()

const keyTv = store.series.length === 0
const keyMovie = store.movies.length === 0

if (props.media === 'tv' && keyTv) await store.popularSeries(1)
if (props.media === 'movie' && keyMovie) await store.popularMovies(1)

popularMedia.value = props.media === 'tv' ? store.series : store.movies

const swiper = ref(null)
const page = store.nextPage
async function onReachEnd() {
  props.media === 'tv' ? page.tv++ : page.movie++

  if (props.media === 'tv') await store.popularSeries(page.tv)
  if (props.media === 'movie') await store.popularMovies(page.movie)

  swiper.value.swiper.update()
}

const swiperParams = reactive({
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: true,
  freeMode: {
    enable: true,
    sticky: true,
    minimumVelocity: 0.02,
    momentum: true
  }
})

const { mediaDetails } = useMediaDetailsStore()
</script>
