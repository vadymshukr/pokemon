import { Pokemon } from '../types/types'

export enum allPokemonsActionEnum {
  getInitialPokemonsList = 'getInitialPokemonsList',
  nextPage = 'nextPage',
  searchPokemon = 'searchPokemon',
  resetPokemons = 'resetPokemons',
  setIsNextPage = 'setIsNextPage',
  setTypes = 'setTypes',
  filterByType = 'filterByType'
}

export type AllPokemonsReducerAction = {
  type: allPokemonsActionEnum
  payload?: any
}

export type State = {
  count: number
  isNext: boolean
  pokemons: Pokemon[]
  offset: number
  types: string[]
  filteredPokemons: Pokemon[]
}

const initialState: State = {
  count: 0,
  isNext: false,
  pokemons: [],
  offset: 0,
  types: [],
  filteredPokemons: []
}

const filterPokemonByType = (pokemons: Pokemon[], payload: string) => {
  return pokemons.filter((pokemon) => {
    return (
      pokemon.types.filter((type) => {
        return type.type.name === payload
      }).length > 0
    )
  })
}

export const pokemonsReducer = (state = initialState, action: AllPokemonsReducerAction): State => {
  switch (action.type) {
    case allPokemonsActionEnum.getInitialPokemonsList:
      return { ...state, pokemons: [...state.pokemons, action.payload] }
    case allPokemonsActionEnum.nextPage:
      return { ...state, offset: state.offset + 10 }
    case allPokemonsActionEnum.searchPokemon:
      return { ...state, pokemons: [action.payload] }
    case allPokemonsActionEnum.resetPokemons:
      return { ...state, pokemons: [], offset: 0 }
    case allPokemonsActionEnum.setIsNextPage:
      return { ...state, isNext: action.payload }
    case allPokemonsActionEnum.setTypes:
      return { ...state, types: action.payload }
    case allPokemonsActionEnum.filterByType:
      return { ...state, filteredPokemons: filterPokemonByType(state.pokemons, action.payload) }
    default:
      return state
  }
}
