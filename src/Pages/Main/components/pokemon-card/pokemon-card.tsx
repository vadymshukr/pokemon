import { Avatar, Box, Button, Card } from '@mui/material'
import { Name } from './pokemon-card-styled'

type Props = {
  readonly name: string
  readonly openModal: (name: string) => void
}

export const PokemonCard = ({ name, openModal }: Props) => {
  return (
    <Card
      variant='outlined'
      sx={{
        p: 2
      }}
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Name>{name}</Name>
        <Button
          variant={'outlined'}
          onClick={() => {
            openModal(name)
          }}
        >
          View details
        </Button>
      </Box>
    </Card>
  )
}
