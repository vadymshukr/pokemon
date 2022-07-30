import { Box, Button, TextField } from '@mui/material'

type Props = {
  onSearch: () => void
  searchQuery: string
  onSearchQueryChange: (searchQuery: string) => void
  onReset: () => void
}

export const Searchbar = ({ onSearch, searchQuery, onSearchQueryChange, onReset }: Props) => {
  return (
    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <TextField
        label={'Pokemon search'}
        variant={'outlined'}
        sx={{ mr: 2 }}
        onChange={(e) => {
          onSearchQueryChange(e.target.value)
        }}
        value={searchQuery}
      />
      <Button
        variant={'outlined'}
        sx={{ height: '56px', mr: 2 }}
        onClick={() => {
          onSearch()
        }}
      >
        Search
      </Button>
      <Button variant={'outlined'} sx={{ height: '56px' }} onClick={onReset}>
        Clear
      </Button>
    </Box>
  )
}
