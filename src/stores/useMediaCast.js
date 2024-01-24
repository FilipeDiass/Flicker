import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi'
import { ref } from 'vue'

export const useMediaCastStore = defineStore('MediaCastStore', () => {
  const cast = ref(null)
  async function mediaCast(type, id) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      const result = await requestApi.json()
      cast.value = result.cast
    } catch (error) {
      console.log(error)
    }
  }

  return { cast, mediaCast }
})
