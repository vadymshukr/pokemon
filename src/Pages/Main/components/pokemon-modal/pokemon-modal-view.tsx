import { Pokemon } from '../../../../types/types'
import { Avatar, Box } from '@mui/material'
import {
  Name,
  ModalWrapper,
  Title,
  StatsWrapper,
  StatsItem,
  StatsParam
} from './pokemon-modal-view-styled'

type Props = {
  pokemon: Pokemon
}

export const PokemonModalView = ({ pokemon }: Props) => {
  return (
    <ModalWrapper>
      <Box sx={{ maxWidth: '500px', display: 'flex', width: '100%', flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid black',
            mb: 4
          }}
        >
          <Avatar src={pokemon.sprites.front_default} sx={{ width: '120px', height: '120px' }} />
          <Name>{pokemon.name}</Name>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flexBasis: '50%' }}>
            <Title>Moves</Title>
            <StatsWrapper>
              {pokemon.moves.map((move) => {
                return (
                  <StatsItem key={move.move.name}>
                    <StatsParam>{move.move.name}</StatsParam>
                  </StatsItem>
                )
              })}
            </StatsWrapper>
          </Box>
          <Box sx={{ flexBasis: '45%' }}>
            <Title>Stats</Title>
            <StatsWrapper>
              {pokemon.stats.map((stats) => {
                return (
                  <StatsItem key={stats.stat.name}>
                    <StatsParam>{stats.stat.name}</StatsParam>
                    <StatsParam>{stats.base_stat}</StatsParam>
                  </StatsItem>
                )
              })}
            </StatsWrapper>
          </Box>
        </Box>
      </Box>
    </ModalWrapper>
  )
}
