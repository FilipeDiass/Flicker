<template>
  <div class="my-5 flex h-fit w-full flex-col gap-2 overflow-hidden px-2.5 xl:p-0">
    <h1 class="font-primary text-2xl text-white">Elenco</h1>
    <swiper-container class="flex size-full" v-bind="swiperParams">
      <swiper-slide v-for="obj in arrayCast" :key="obj.id" class="max-w-28">
        <div class="h-72 w-32 overflow-hidden rounded">
          <picture class="block h-3/4 max-h-48 w-full bg-slate-950">
            <img
              v-if="obj.profile_path"
              :src="`https://image.tmdb.org/t/p/original/${obj.profile_path}`"
              :alt="obj.original_name || obj.name"
              class="size-full object-cover font-primary text-white"
            />
          </picture>
          <div class="flex h-2/4 w-full flex-col bg-white px-2.5 font-primary">
            <p class="line-clamp-2 h-fit max-h-12 w-full">
              {{ obj.original_name || obj.name }}
            </p>
            <span class="text line-clamp-2 h-fit max-h-11 w-full font-secondary text-gray-500">
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

console.log(store.cast)
const swiperParams = reactive({
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
  freeMode: {
    enable: true,
    sticky: true,
    minimumVelocity: 0.02,
    momentum: true
  }
})
</script>

<style scoped></style>
