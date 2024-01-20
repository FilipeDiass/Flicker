import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi'
import { ref, reactive } from 'vue'

export const usePopularMediaStore = defineStore('PopularMediaStore', () => {
  const series = ref([])
  async function popularSeries(page) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      const result = await requestApi.json()
      result.results.forEach((el) => {
        const isIdExists = series.value.some((obj) => obj.id === el.id)
        if (!isIdExists) {
          series.value.push(el)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const movies = ref([])
  async function popularMovies(page) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      const result = await requestApi.json()
      result.results.forEach((el) => {
        const isIdExists = movies.value.some((obj) => obj.id === el.id)
        if (!isIdExists) {
          movies.value.push(el)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const nextPage = reactive({
    tv: 1,
    movie: 1
  })

  return { popularSeries, series, popularMovies, movies, nextPage }
})
