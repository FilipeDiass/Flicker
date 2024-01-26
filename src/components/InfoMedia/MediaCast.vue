<template>
  <div class="my-5 flex h-fit w-full flex-col gap-2 overflow-hidden px-2.5 xl:p-0">
    <h1 class="font-primary text-2xl text-white md:text-3xl">Cast</h1>
    <swiper-container class="flex size-full" v-bind="swiperParams">
      <swiper-slide v-for="obj in arrayCast" :key="obj.id" class="max-w-28">
        <div class="h-72 w-32 overflow-hidden rounded md:h-80 md:w-40">
          <picture class="flex h-[70%] w-full items-center justify-center bg-slate-950">
            <img
              v-if="obj.profile_path"
              :src="`https://image.tmdb.org/t/p/original/${obj.profile_path}`"
              :alt="obj.original_name || obj.name"
              class="size-full object-cover font-primary text-white"
            />
            <UserIcon v-else class="size-20 stroke-slate-600" />
          </picture>
          <div class="flex h-[30%] w-full flex-col justify-center bg-white px-2.5 font-primary">
            <p class="line-clamp-2 h-fit w-full md:text-lg">
              {{ obj.original_name || obj.name }}
            </p>
            <span class="line-clamp-2 h-fit w-full font-secondary text-sm text-gray-500">
              {{ obj.character }}
            </span>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { useMediaCastStore } from '@/stores/useMediaCast'
import { ref, reactive } from 'vue'
import { UserIcon } from '@/assets/icons'

const props = defineProps({
  infoMedia: {
    type: Object,
    default: () => ({})
  }
})
const { media, type } = props.infoMedia

const store = useMediaCastStore()
await store.mediaCast(type, media.id)
const arrayCast = ref(store.cast)

const swiperParams = reactive({
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
  freeMode: {
    enable: true,
    sticky: true,
    minimumVelocity: 0.02,
    momentum: true
  },
  breakpoints: {
    768: {
      spaceBetween: 70
    }
  }
})
</script>

<style scoped></style>
