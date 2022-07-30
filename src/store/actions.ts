import { allPokemonsActionEnum, AllPokemonsReducerAction } from './reducers'
import { NamedAPIResource, Pokemon } from '../types/types'

export type PokemonActions = {
  getPokemons: (payload: NamedAPIResource[]) => AllPokemonsReducerAction
  nextOffset: () => AllPokemonsReducerAction
  searchPokemon: (payload: Pokemon) => AllPokemonsReducerAction
  resetPokemons: () => AllPokemonsReducerAction
  setTypes: (payload: string[]) => AllPokemonsReducerAction
  getPokemonsByType: (payload: NamedAPIResource[]) => AllPokemonsReducerAction
  setIsNextPage: (payload: boolean) => AllPokemonsReducerAction
  setSinglePokemon: (payload: Pokemon) => AllPokemonsReducerAction
}

export const pokemonActions = (): PokemonActions => {
  const getPokemons = (payload: NamedAPIResource[]) => ({
    type: allPokemonsActionEnum.getInitialPokemonsList,
    payload
  })

  const nextOffset = () => ({
    type: allPokemonsActionEnum.nextPage
  })

  const searchPokemon = (payload: Pokemon) => {
    console.log(payload)
    return {
      type: allPokemonsActionEnum.searchPokemon,
      payload
    }
  }

  const resetPokemons = () => ({
    type: allPokemonsActionEnum.resetPokemons
  })

  const setTypes = (payload: string[]) => ({
    type: allPokemonsActionEnum.setTypes,
    payload
  })

  const getPokemonsByType = (payload: NamedAPIResource[]) => ({
    type: allPokemonsActionEnum.filterByType,
    payload
  })

  const setIsNextPage = (payload: boolean) => ({
    type: allPokemonsActionEnum.setIsNextPage,
    payload
  })

  const setSinglePokemon = (payload: Pokemon) => ({
    type: allPokemonsActionEnum.singlePokemon,
    payload
  })

  return {
    nextOffset,
    getPokemons,
    searchPokemon,
    resetPokemons,
    setTypes,
    getPokemonsByType,
    setIsNextPage,
    setSinglePokemon
  }
}
