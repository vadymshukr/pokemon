import { PokemonApiService } from '../pokemon-api-service/pokemon-api-service'
import { PokemonActions } from './actions'
import { NamedAPIResourceList, Pokemon } from '../types/types'
import { ThunkDispatch } from 'redux-thunk'
import { State } from './reducers'
import { Action } from 'redux'

export type AsyncPokemonActions = {
  loadPokemons: (offset: number) => (dispatch: any) => void
  searchPokemon: (name: string) => (dispatch: any) => void
  getPokemonTypes: () => (dispatch: any) => void
  getPokemonsByType: (type: string) => (dispatch: any) => void
  getSinglePokemon: (name: string) => (dispatch: any) => void
}

export const asyncPokemonActions = (
  service: PokemonApiService,
  actions: PokemonActions
): AsyncPokemonActions => {
  const loadPokemons = (offset = 0) => {
    return (dispatch: ThunkDispatch<State, void, Action>) => {
      service.getAllPokemons({ offset }).then((res: NamedAPIResourceList) => {
        dispatch(actions.getPokemons(res.results))
        dispatch(actions.setIsNextPage(!!res.next))
      })
    }
  }

  const searchPokemon = (name: string) => {
    return (dispatch: ThunkDispatch<State, void, Action>) => {
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
    return (dispatch: ThunkDispatch<State, void, Action>) => {
      service.getTypes().then((types) => {
        dispatch(actions.setTypes(types.results.map((result) => result.name)))
      })
    }
  }

  const getPokemonsByType = (type: string) => {
    return (dispatch: any) => {
      service.getPokemonsByType(type).then((type) => {
        dispatch(actions.setIsNextPage(false))
        dispatch(actions.getPokemonsByType(type.pokemon.map((item) => item.pokemon)))
      })
    }
  }

  const getSinglePokemon = (name: string) => {
    return (dispatch: any) => {
      if (name) {
        service.getPokemonByName(name).then((pokemon) => {
          dispatch(actions.setSinglePokemon(pokemon))
        })
      } else {
        dispatch(actions.setSinglePokemon({} as Pokemon))
      }
    }
  }

  return { loadPokemons, searchPokemon, getPokemonTypes, getPokemonsByType, getSinglePokemon }
}
