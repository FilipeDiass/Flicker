<template>
  <section class="my-5 flex h-fit w-full flex-col gap-5 overflow-hidden p-2.5">
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
          v-for="el in arraySeries"
          :key="el.id"
          class="flex items-center justify-center"
        >
          <picture class="h-fit w-36 flex-shrink-0 cursor-pointer overflow-hidden rounded lg:w-40">
            <img
              class="size-full object-cover"
              :src="`https://image.tmdb.org/t/p/original/${el.poster_path}`"
              :alt="el.title"
            />
          </picture>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup>
import { usePopularMediaStore } from '@/stores/usePopularMedia'
import { ref, reactive } from 'vue'

const store = usePopularMediaStore()
if (!store.arraySeries) await store.popularSeries(1)

const arraySeries = store.arraySeries
console.log(arraySeries)

const swiper = ref(null)
const page = ref(1)

async function onReachEnd() {
  page.value++
  await store.popularSeries(page.value)

  swiper.value.swiper.updateSlides()
}

const swiperParams = reactive({
  slidesPerView: 'auto',
  breakpoints: {
    320: { slidesPerView: 2 },
    470: { slidesPerView: 3 },
    630: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    945: { slidesPerView: 6, spaceBetween: 5 },
    1280: { slidesPerView: 7, spaceBetween: 20 }
  }
})
</script>
<!-- slides-per-view="3" space-between="10"  -->
<!-- const props = defineProps({
//   mediaType: {
//     type: Object,
//     default: () => ({})
//   }
// })
// const { media, page } = props.mediaType

// const store = usePopularMediaStore()
// if (!store.popularSeries) await store.popularMedia(media, page)
// const arraySeries = ref(store.popularSeries.results)

// const swiper = ref(null)
// const numPages = ref(page)
// async function onReachEnd() {
//   numPages.value++
//   await store.popularMedia(media, numPages.value)
//   arraySeries.value = arraySeries.value.concat(store.popularSeries.results)

//   swiper.value.swiper.updateSlides()
// } -->
