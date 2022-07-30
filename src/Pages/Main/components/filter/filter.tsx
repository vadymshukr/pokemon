import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'

type Props = {
  types: string[]
  onChange: (type: string) => void
  currentType: string
}

export const Filter = ({ types, onChange, currentType }: Props) => {
  const handleChange = (type: string) => {
    onChange(type)
  }
  useEffect(() => {
    console.log(currentType)
  }, [currentType])
  return (
    <FormControl sx={{ width: '400px' }}>
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
  )
}
