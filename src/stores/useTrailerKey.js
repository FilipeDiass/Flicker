import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi'
import { ref } from 'vue'

export const useTrailerKeyStore = defineStore('trailerKeyStore', () => {
  const objectTrailer = ref(null)

  async function trailerKey(id, mediaType) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=en-US`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      objectTrailer.value = await requestApi.json()
    } catch (error) {
      console.log(error)
    }
  }

  return { objectTrailer, trailerKey }
})
