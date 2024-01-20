import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi'
import { reactive, ref } from 'vue'

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
  async function topRatedMovie(page) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
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

  return { topRatedSerie, series, topRatedMovie, movies, nextPage }
})
