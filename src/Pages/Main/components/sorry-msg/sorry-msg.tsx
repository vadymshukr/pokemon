import { AlertTitle, Box } from '@mui/material'

export const SorryMsg = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', jusctifyContent: 'center' }}>
      <AlertTitle> Sorry, there is no pokemons</AlertTitle>
    </Box>
  )
}
