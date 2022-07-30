import React from 'react'
import { Pokemon } from '../../types/types'
import { PokemonCard } from './components/pokemon-card/pokemon-card'
import { Box, Button, Grid } from '@mui/material'
import { ViewContainer } from './main-view-styled'

type Props = {
  pokemons: Pokemon[]
  loadMore: () => void
}

export const MainView = ({ pokemons, loadMore }: Props) => {
  return (
    <ViewContainer>
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => {
          const pokeProps = {
            name: pokemon.species.name,
            url: pokemon.species.url,
            imgUrl: pokemon.sprites.front_default,
            moves: pokemon.moves,
            stats: pokemon.stats
          }
          return (
            <Grid item xs={12} sm={6} key={pokemon.id}>
              <PokemonCard pokemon={pokeProps} />
            </Grid>
          )
        })}
      </Grid>
      {pokemons.length >= 10 && (
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
