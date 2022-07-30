import { HttpAxiosService } from './http-service/http-axios-service'
import { createAxiosInstance } from './http-service/create-axios-instance'
import { PokemonApiService } from './pokemon-api-service/pokemon-api-service'
import { AsyncPokemonActions, asyncPokemonActions } from './store/async-actions'
import { PokemonActions, pokemonActions } from './store/actions'
import { getPokemonState } from './store/selectors'
import { RootState } from './store/store'
import { State } from './store/reducers'

const httpService = new HttpAxiosService(createAxiosInstance())
const pokemonService = new PokemonApiService(httpService)
const actions = pokemonActions()
const asyncActions = asyncPokemonActions(pokemonService, actions)

export type PokemonContainerType = {
  actions: PokemonActions
  asyncActions: AsyncPokemonActions
  selectors: { getPokemonState: (state: RootState) => State }
}

export const pokemonContainer: PokemonContainerType = {
  actions,
  asyncActions,
  selectors: { getPokemonState }
}
