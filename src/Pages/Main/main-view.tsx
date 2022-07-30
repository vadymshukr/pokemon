import React from 'react'
import { NamedAPIResource, Pokemon } from '../../types/types'
import { PokemonCard } from './components/pokemon-card/pokemon-card'
import { Box, Button, Grid } from '@mui/material'
import { ViewContainer } from './main-view-styled'

type Props = {
  pokemons: NamedAPIResource[]
  loadMore: () => void
  isNextPage: boolean
  openModal: (name: string) => void
}

export const MainView = ({ pokemons, loadMore, isNextPage, openModal }: Props) => {
  return (
    <ViewContainer>
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => {
          return (
            <Grid item xs={12} sm={6} key={pokemon.name}>
              <PokemonCard name={pokemon.name} openModal={openModal} />
            </Grid>
          )
        })}
      </Grid>
      {isNextPage && pokemons.length >= 10 && (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Button
            sx={{ mt: 2 }}
            onClick={() => {
              loadMore()
            }}
          >
            Load More
          </Button>
        </Box>
      )}
    </ViewContainer>
  )
}
