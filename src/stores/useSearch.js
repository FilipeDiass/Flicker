import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi'
import { ref } from 'vue'

export const useSearchStore = defineStore('SearchStore', () => {
  const searchResult = ref(null)
  async function search(value) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=1`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      const result = await requestApi.json()
      searchResult.value = result.results.filter((el) => el.media_type !== 'person')
    } catch (error) {
      console.error(error)
    }
  }

  return { searchResult, search }
})
