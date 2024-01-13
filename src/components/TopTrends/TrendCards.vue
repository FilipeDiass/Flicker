<template>
  <div class="flex h-full w-full items-center justify-center overflow-hidden lg:w-9/12">
    <swiper-container
      class="flex h-fit w-full items-center justify-center"
      loop="true"
      initial-slide="1"
      autoplay-delay="3000"
      effect="coverflow"
      grab-cursor="true"
      centered-slides="true"
      slides-per-view="auto"
      coverflow-effect-rotate="50"
      coverflow-effect-stretch="-30"
      coverflow-effect-depth="150"
      coverflow-effect-modifier="1"
      coverflow-effect-slide-shadows="true"
    >
      <swiper-slide
        v-for="(el, i) in arrayTrends"
        :key="el.id"
        class="h-40 w-52 cursor-pointer md:h-60 md:w-80 lg:h-56 lg:w-72"
      >
        <div class="flex size-full overflow-hidden rounded bg-slate-950 shadow-lg shadow-black">
          <div
            class="border-text-1 z-30 flex h-full w-[45%] items-center justify-center font-primary text-[5rem] text-transparent md:text-8xl lg:text-[7rem]"
          >
            {{ i + 1 }}
          </div>
          <div
            class="relative h-full w-[55%] before:absolute before:left-0 before:h-full before:w-2 before:bg-gradient-to-r before:from-slate-950"
          >
            <img
              :src="`https://image.tmdb.org/t/p/original${el.poster_path}`"
              :alt="el.title || el.name"
              class="size-full object-cover text-white"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { useTrendsMediaStore } from '@/stores/useTrendsMedia'

const store = useTrendsMediaStore()
if (!store.objectTrends) await store.trendsMedia()

const arrayTrends = store.objectTrends.results.slice(0, 10)
</script>
<!-- 50
150 -->
