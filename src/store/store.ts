import { applyMiddleware, combineReducers, createStore } from 'redux'
import { pokemonsReducer, AllPokemonsReducerAction } from './reducers'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const rootReducer = combineReducers({
  pokemonsReducer: pokemonsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, any, AllPokemonsReducerAction>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
