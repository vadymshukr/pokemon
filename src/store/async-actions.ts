import { PokemonApiService } from '../pokemon-api-service/pokemon-api-service'
import { PokemonActions } from './actions'
import { NamedAPIResource, NamedAPIResourceList } from '../types/types'

export type AsyncPokemonActions = {
  loadPokemons: (offset: number) => (dispatch: any) => void
  searchPokemon: (name: string) => (dispatch: any) => void
  getPokemonTypes: () => (dispatch: any) => void
}

export const asyncPokemonActions = (
  service: PokemonApiService,
  actions: PokemonActions
): AsyncPokemonActions => {
  const loadPokemons = (offset = 0) => {
    return (dispatch: any) => {
      service.getAllPokemons({ offset }).then((res: NamedAPIResourceList) => {
        res.results.forEach((item: NamedAPIResource) => {
          service.getPokemonByName(item.name).then((pokemon) => {
            dispatch(actions.getPokemons(pokemon))
          })
        })
      })
    }
  }

  const searchPokemon = (name: string) => {
    return (dispatch: any) => {
      if (name) {
        service
          .getPokemonByName(name)
          .then((pokemon) => {
            dispatch(actions.searchPokemon(pokemon))
          })
          .catch((error) => {
            dispatch(actions.resetPokemons())
          })
      }
    }
  }

  const getPokemonTypes = () => {
    return (dispatch: any) => {
      service.getTypes().then((types) => {
        dispatch(actions.setTypes(types.results.map((result) => result.name)))
      })
    }
  }
  return { loadPokemons, searchPokemon, getPokemonTypes }
}
