import { useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { MainView } from './main-view'
import { PokemonContext } from '../../pokemon-context/pokemon-context'
import { Searchbar } from './components/searchbar/searchbar'
import { SorryMsg } from './components/sorry-msg/sorry-msg'
import { Box } from '@mui/material'
import { Filter } from './components/filter/filter'
import { Pokemon } from '../../types/types'

export const Main = () => {
  const dispatch = useAppDispatch()
  const context = useContext(PokemonContext)
  const { pokemons, offset, types, filteredPokemons } = useAppSelector(
    context!.selectors.getPokemonState
  )
  const { loadPokemons, searchPokemon, getPokemonTypes } = context!.asyncActions
  const { nextOffset, resetPokemons, filterByType } = context!.actions
  const [showedPokemons, setShowedPokemons] = useState<Pokemon[]>([])
  const [isFilterView, setFilterView] = useState(false)
  const [currentType, setCurrentType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(() => {
    dispatch(loadPokemons(offset))
  }, [offset])

  useEffect(() => {
    setShowedPokemons(isFilterView ? filteredPokemons : pokemons)
  }, [pokemons, isFilterView, currentType, filteredPokemons])

  useEffect(() => {
    dispatch(getPokemonTypes())
  }, [])

  const loadMore = () => {
    dispatch(nextOffset())
  }
  const onSearch = () => {
    setFilterView(false)
    if (searchQuery) {
      dispatch(searchPokemon(searchQuery.toLowerCase()))
    } else {
      dispatch(resetPokemons())
      if (offset === 0) {
        dispatch(loadPokemons(0))
      }
    }
  }

  const onTypeChange = (type: string) => {
    dispatch(filterByType(type))
    setCurrentType(currentType)
    setFilterView(true)
  }

  const onSearchReset = () => {
    setSearchQuery('')
    setFilterView(false)
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Searchbar
          onSearch={onSearch}
          searchQuery={searchQuery}
          onSearchQueryChange={(query) => {
            setSearchQuery(query)
          }}
          onReset={onSearchReset}
        />
        <Filter types={types} onChange={onTypeChange} currentType={currentType} />
      </Box>
      {showedPokemons.length > 0 ? (
        <MainView pokemons={showedPokemons} loadMore={loadMore} />
      ) : (
        <SorryMsg />
      )}
    </>
  )
}
