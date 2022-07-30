import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

type Props = {
  types: string[]
  onChange: (type: string) => void
  currentType: string
  onReset: () => void
}

export const FilterView = ({ types, onChange, currentType, onReset }: Props) => {
  const handleChange = (type: string) => {
    onChange(type)
  }

  return (
    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <FormControl sx={{ width: '400px', mr: 2 }}>
        <InputLabel>Type</InputLabel>
        <Select
          value={currentType}
          label='Type'
          onChange={(e) => {
            handleChange(e.target.value)
          }}
        >
          {types.map((type) => {
            return (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Button variant={'outlined'} sx={{ height: '56px' }} onClick={onReset}>
        Clear
      </Button>
    </Box>
  )
}
