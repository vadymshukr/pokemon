import { Avatar, Box, Card } from '@mui/material'
import { Name } from './pokemon-card-styled'

type Props = {
  pokemon: {
    readonly name: string
    readonly imgUrl: string
    readonly url: string
    readonly stats: any
    readonly moves: any
  }
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { name, url, imgUrl, moves, stats } = pokemon
  return (
    <Card
      variant='outlined'
      sx={{
        p: 2
      }}
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Avatar src={imgUrl} />
        <Name>{name}</Name>
      </Box>
    </Card>
  )
}
