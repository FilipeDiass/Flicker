<template>
  <div
    class="fixed left-0 top-0 z-50 flex h-dvh w-dvw flex-col items-center justify-center overflow-hidden font-primary"
    @click="props.toggle"
  >
    <div
      class="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black/80 duration-150"
    >
      <iframe
        v-if="key"
        class="mediaQuery rounded-lg"
        :src="`https://www.youtube.com/embed/${key}?autoplay=1&loop=1&modestbranding=1&showinfo=0&&enablejsapi=1&widgetid=3`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        allowsInlineMediaPlayback="True"
      ></iframe>
      <div v-else class="mediaQuery flex items-center justify-center rounded-lg">
        <p class="font-primary text-2xl text-white">
          Unfortunately this media does not have a trailer
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTrailerKeyStore } from '@/stores/useTrailerKey'

const props = defineProps({
  mediaInfo: {
    type: Object,
    default: () => ({})
  },
  toggle: {
    type: Function,
    default() {
      return 'Default function'
    }
  }
})
const { id, mediaType } = props.mediaInfo

const store = useTrailerKeyStore()
await store.trailerKey(id, mediaType)
const trailerArray = store.objectTrailer.results
console.log(trailerArray)
let key = undefined
if (trailerArray.length > 0) {
  ;({ key } = trailerArray.find((el) => el.type === 'Trailer' || 'Clip'))
}
</script>

<style scoped>
.mediaQuery {
  @apply h-[140px] w-[240px] min-[320px]:h-[180px] min-[320px]:w-[320px] sm:h-[292px] sm:w-[520px] md:h-[337px] md:w-[600px] lg:h-[490px] lg:w-[870px] xl:h-[517px] xl:w-[920px];
}
</style>
