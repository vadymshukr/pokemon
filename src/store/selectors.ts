import { RootState } from './store'

export const getPokemonState = (state: RootState) => state.pokemonsReducer
