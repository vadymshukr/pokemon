import { NamedAPIResource, Pokemon } from '../types/types'

export enum allPokemonsActionEnum {
  getInitialPokemonsList = 'getInitialPokemonsList',
  nextPage = 'nextPage',
  searchPokemon = 'searchPokemon',
  resetPokemons = 'resetPokemons',
  setIsNextPage = 'setIsNextPage',
  setTypes = 'setTypes',
  filterByType = 'filterByType',
  singlePokemon = 'singlePokemon'
}

export type AllPokemonsReducerAction = {
  type: allPokemonsActionEnum
  payload?: any
}

export type State = {
  count: number
  isNextPage: boolean
  pokemons: NamedAPIResource[]
  offset: number
  types: string[]
  singlePokemon: Pokemon
}

const initialState: State = {
  count: 0,
  isNextPage: false,
  pokemons: [],
  offset: 0,
  types: [],
  singlePokemon: {} as Pokemon
}

export const pokemonsReducer = (state = initialState, action: AllPokemonsReducerAction): State => {
  switch (action.type) {
    case allPokemonsActionEnum.getInitialPokemonsList:
      return { ...state, pokemons: [...state.pokemons, ...action.payload] }
    case allPokemonsActionEnum.nextPage:
      return { ...state, offset: state.offset + 10 }
    case allPokemonsActionEnum.searchPokemon:
      return { ...state, pokemons: [action.payload] }
    case allPokemonsActionEnum.resetPokemons:
      return { ...state, pokemons: [], offset: 0 }
    case allPokemonsActionEnum.setIsNextPage:
      return { ...state, isNextPage: action.payload }
    case allPokemonsActionEnum.setTypes:
      return { ...state, types: action.payload }
    case allPokemonsActionEnum.filterByType:
      return { ...state, pokemons: action.payload }
    case allPokemonsActionEnum.singlePokemon:
      return { ...state, singlePokemon: action.payload }
    default:
      return state
  }
}
