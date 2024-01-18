import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi'
import { ref } from 'vue'

export const useTopRatedStore = defineStore('SeriesStore', () => {
  const series = ref([])
  async function topRatedSerie(page) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      const result = await requestApi.json()
      result.results.forEach((el) => series.value.push(el))
      return series.value
    } catch (error) {
      console.error(error)
    }
  }

  const movies = ref([])
  async function topRatedMovie(page) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      const result = await requestApi.json()
      result.results.forEach((el) => movies.value.push(el))
      return movies.value
    } catch (error) {
      console.error(error)
    }
  }

  return { topRatedSerie, topRatedMovie }
})
