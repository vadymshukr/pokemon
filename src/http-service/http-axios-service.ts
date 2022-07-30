import { AxiosInstance } from 'axios'

export type HTTPGet = <T, C = void>(path: string, config?: C) => Promise<T>

export interface IHTTPService {
  get: HTTPGet
}

export class HttpAxiosService implements IHTTPService {
  $axios: AxiosInstance

  constructor($axios: AxiosInstance) {
    this.$axios = $axios
  }

  get<T, C>(path: string, config?: C) {
    return this.$axios.get<T>(path, config).then((res) => res.data)
  }
}
