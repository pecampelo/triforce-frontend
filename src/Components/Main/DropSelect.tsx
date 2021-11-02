import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';


export default function DropSelect() {
  const [age, setAge] = useState('');

  const getInstitutions = async () => {
    try {
      const data = await fetch('http://localhost:8008/institutions');
      return data;
    } catch (e) {
      console.log(e);
      return [];
    }

  }

  const [items, setItems] = useState(getInstitutions());

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };


  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl required sx={{ m: 5, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Banco</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          fullWidth
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value={10}>Itaú</MenuItem>
          <MenuItem value={20}>Bradesco</MenuItem>
          <MenuItem value={30}>Santander</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
