import { reactive, ref } from 'vue'

const options = reactive({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'
  }
})

const data = ref('')
export async function useApiTMDBStore(url) {
  try {
    const fetchApi = await fetch(url, options)
    if (!fetchApi.ok) throw 'Não foi possível requisitar a API.'

    data.value = await fetchApi.json()
  } catch (error) {
    console.error(error)
  }
}
