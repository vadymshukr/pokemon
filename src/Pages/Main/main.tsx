import { useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { MainView } from './main-view'
import { PokemonContext } from '../../pokemon-context/pokemon-context'
import { Searchbar } from './components/searchbar/searchbar'
import { SorryMsg } from './components/sorry-msg/sorry-msg'
import { Box } from '@mui/material'
import { Filter } from './components/filter/filter'
import Modal from 'react-modal'
import { PokemonModal } from './components/pokemon-modal/pokemon-modal'

Modal.setAppElement('#root')

export const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { selectors, actions, asyncActions } = useContext(PokemonContext)
  const { pokemons, offset, isNextPage, singlePokemon } = useAppSelector(selectors.getPokemonState)
  const { loadPokemons, searchPokemon, getPokemonTypes, getSinglePokemon } = asyncActions
  const { nextOffset, resetPokemons } = actions
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(loadPokemons(offset))
  }, [offset])

  useEffect(() => {
    dispatch(getPokemonTypes())
  }, [])

  const onSearch = () => {
    if (searchQuery) {
      dispatch(searchPokemon(searchQuery.toLowerCase()))
    } else {
      dispatch(resetPokemons())
      if (offset === 0) {
        dispatch(loadPokemons(0))
      }
    }
  }

  const onSearchReset = () => {
    setSearchQuery('')
    dispatch(resetPokemons())
    dispatch(loadPokemons(0))
  }

  const openDetailModal = (name: string) => {
    setModalOpen(true)
    dispatch(getSinglePokemon(name))
  }

  const closeDetailModal = () => {
    setModalOpen(false)
    dispatch(getSinglePokemon(''))
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
        <Filter />
      </Box>
      {pokemons.length > 0 ? (
        <MainView
          pokemons={pokemons}
          loadMore={() => {
            dispatch(nextOffset())
          }}
          isNextPage={isNextPage}
          openModal={openDetailModal}
        />
      ) : (
        <SorryMsg />
      )}
      <Modal isOpen={isModalOpen} style={{ overlay: { zIndex: 100 } }}>
        <PokemonModal pokemon={singlePokemon} onClose={closeDetailModal} />
      </Modal>
    </>
  )
}
