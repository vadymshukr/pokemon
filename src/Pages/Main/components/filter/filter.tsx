import { useContext, useState } from 'react'
import { FilterView } from './filter-view'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { PokemonContext } from '../../../../pokemon-context/pokemon-context'

export const Filter = () => {
  const [currentType, setCurrentType] = useState('')
  const { selectors, asyncActions, actions } = useContext(PokemonContext)
  const { loadPokemons, getPokemonsByType } = asyncActions
  const { resetPokemons } = actions
  const { types } = useAppSelector(selectors.getPokemonState)
  const dispatch = useAppDispatch()
  const onFilterReset = () => {
    setCurrentType('')
    dispatch(resetPokemons())
    dispatch(loadPokemons(0))
  }

  const onTypeChange = (type: string) => {
    dispatch(getPokemonsByType(type))
    setCurrentType(type)
  }

  return (
    <FilterView
      types={types}
      onChange={onTypeChange}
      currentType={currentType}
      onReset={onFilterReset}
    />
  )
}
