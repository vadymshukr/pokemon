import { allPokemonsActionEnum, AllPokemonsReducerAction } from './reducers'
import { Pokemon } from '../types/types'

export type PokemonActions = {
  getPokemons: (payload: Pokemon) => AllPokemonsReducerAction
  nextOffset: () => AllPokemonsReducerAction
  searchPokemon: (payload: Pokemon) => AllPokemonsReducerAction
  resetPokemons: () => AllPokemonsReducerAction
  setTypes: (payload: string[]) => AllPokemonsReducerAction
  filterByType: (payload: string) => AllPokemonsReducerAction
}

export const pokemonActions = (): PokemonActions => {
  const getPokemons = (payload: Pokemon) => ({
    type: allPokemonsActionEnum.getInitialPokemonsList,
    payload
  })

  const nextOffset = () => ({
    type: allPokemonsActionEnum.nextPage
  })

  const searchPokemon = (payload: Pokemon) => ({
    type: allPokemonsActionEnum.searchPokemon,
    payload
  })

  const resetPokemons = () => ({
    type: allPokemonsActionEnum.resetPokemons
  })

  const setTypes = (payload: string[]) => ({
    type: allPokemonsActionEnum.setTypes,
    payload
  })

  const filterByType = (payload: string) => ({
    type: allPokemonsActionEnum.filterByType,
    payload
  })

  return { nextOffset, getPokemons, searchPokemon, resetPokemons, setTypes, filterByType }
}
