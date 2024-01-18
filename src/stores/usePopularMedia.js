import { defineStore } from 'pinia'
import { options } from '@/assets/scripts/optionsApi'
import { ref } from 'vue'

export const usePopularMediaStore = defineStore('PopularMediaStore', () => {
  const randomNumber = ref(Math.floor(Math.random() * 20))

  const arraySeries = ref([])
  async function popularSeries(page) {
    try {
      const requestApi = await fetch(
        `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
        options
      )
      if (!requestApi.ok) throw 'Unable to request API'

      const result = await requestApi.json()
      result.results.forEach((el) => arraySeries.value.push(el))
      return arraySeries.value
    } catch (error) {
      console.error(error)
    }
  }

  return { randomNumber, popularSeries }
})

// const arraySeries = ref(null)
// async function popularSeries(page) {
//   arraySeries.value = new Array()

//   try {
//     const requestApi = await fetch(
//       `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
//       options
//     )
//     if (!requestApi.ok) throw 'Unable to request API'

//     const result = await requestApi.json()
//     result.results.forEach((el) => arraySeries.value.push(el))
//   } catch (error) {
//     console.error(error)
//   }
// }

// const arrayMovies = ref(null)
// async function popularMovies(page) {
//   arrayMovies.value = new Array()

//   try {
//     const requestApi = await fetch(
//       `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
//       options
//     )
//     if (!requestApi.ok) throw 'Unable to request API'

//     const result = await requestApi.json()
//     result.results.forEach((el) => arrayMovies.value.push(el))
//   } catch (error) {
//     console.error(error)
//   }
// }

// const randomNumber = ref(Math.floor(Math.random() * 20))

// return { arraySeries, popularSeries, arrayMovies, popularMovies, randomNumber }

// const popularMovie = ref(null)
// const popularSeries = ref(null)

// // movie our tv
// async function popularMedia(media, page) {
//   try {
//     const requestApi = await fetch(
//       `https://api.themoviedb.org/3/${media}/popular?language=en-US&page=${page}`,
//       options
//     )
//     if (!requestApi.ok) throw 'Unable to request API'

//     if (media === 'movie') {
//       popularMovie.value = await requestApi.json()
//     } else {
//       popularSeries.value = await requestApi.json()
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }

// return { popularMovie, popularSeries, popularMedia, randomNumber }
