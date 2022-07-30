import { HTTPGet, IHTTPService } from '../http-service/http-axios-service'
import { Pokemon, PokemonType, Type } from '../types/types'

export interface NamedAPIResource {
  name: string
  url: string
}

export interface NamedAPIResourceList {
  count: number
  next: string | null
  previous: string | null
  results: NamedAPIResource[]
}
type PokemonParams = {
  offset: number
  limit?: number
}
type GetPokemonsParams = {
  params: PokemonParams
}

interface IPokemonApi {
  getAllPokemons: ({ offset, limit }: PokemonParams) => Promise<NamedAPIResourceList>
  getPokemonByName: (name: string) => Promise<Pokemon>
  getTypes: () => Promise<NamedAPIResourceList>
  getPokemonsByType: (type: string) => Promise<Type>
}

export class PokemonApiService implements IPokemonApi {
  private get: HTTPGet
  constructor(httpService: IHTTPService) {
    this.get = httpService.get.bind(httpService)
  }

  getAllPokemons({ offset, limit = 10 }: PokemonParams) {
    return this.get<NamedAPIResourceList, GetPokemonsParams>('pokemon', {
      params: { limit, offset }
    })
  }
  getPokemonByName(name: string) {
    return this.get<Pokemon>(`pokemon/${name}`)
  }

  getTypes() {
    return this.get<NamedAPIResourceList>('type')
  }

  getPokemonsByType(type: string) {
    return this.get<Type>(`type/${type}`)
  }
}
