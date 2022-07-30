import axios from 'axios'

export function createAxiosInstance() {
  const BASE_URL = 'https://pokeapi.co/api/v2/'
  const $axios = axios.create({ baseURL: BASE_URL })

  return $axios
}
