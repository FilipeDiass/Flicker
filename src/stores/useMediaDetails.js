import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi'
import { ref } from 'vue'

export const useMediaDetailsStore = defineStore('MediaDetails', () => {
  const media = ref(null)
  const mediaType = ref(null)
  async function mediaDetails(type, id) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      const result = await requestApi.json()
      media.value = result
      mediaType.value = type
    } catch (error) {
      console.error(error)
    }
  }

  return { media, mediaType, mediaDetails }
})
