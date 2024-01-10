import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi.js'
import { ref } from 'vue'

export const useTrendsMediaStore = defineStore('trendsMediaStore', () => {
  const objectTrends = ref(null)

  async function trendsMedia() {
    try {
      const requestApi = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      objectTrends.value = await requestApi.json()
    } catch (error) {
      console.error(error)
    }
  }

  const randomNumber = ref(Math.floor(Math.random() * 10))

  return { objectTrends, trendsMedia, randomNumber }
})
