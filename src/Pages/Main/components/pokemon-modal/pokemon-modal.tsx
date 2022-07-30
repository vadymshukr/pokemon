import { PokemonModalView } from './pokemon-modal-view'
import { Pokemon } from '../../../../types/types'
import { Box, Button } from '@mui/material'

type Props = {
  pokemon: Pokemon
  onClose: () => void
}

export const PokemonModal = ({ pokemon, onClose }: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {pokemon.name && <PokemonModalView pokemon={pokemon} />}
      <Button variant={'outlined'} sx={{ mt: 5 }} onClick={onClose}>
        Close
      </Button>
    </Box>
  )
}
