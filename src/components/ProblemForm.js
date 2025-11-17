// src/components/ProblemForm.js
import React, { useState } from 'react';

// --- Import the MUI components we need ---
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

function ProblemForm({ onSubmit }) {
  // This state logic is exactly the same
  const [title, setTitle] = useState('');
  const [external_id, setExternalId] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !external_id) return;

    onSubmit(title, external_id, difficulty);

    setTitle('');
    setExternalId('');
    setDifficulty('Easy');
  };

  /*
JSX review:
    - 
    - `sx` is the prop used for styling in MUI.
    - <FormControl>, <InputLabel>, <Select>, and <MenuItem> work 
      together to create a nicer looking dropdown.
    - <Button variant="contained"> gives us a primary, solid button.
  */
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, m: 2 }}
    >
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <TextField
        label="Leetcode URL"
        variant="outlined"
        placeholder="e.g., https://leetcode.com/problems/two-sum/description/"
        value={external_id}
        onChange={(e) => setExternalId(e.target.value)}
        required
      />

      <FormControl fullWidth>
        <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
        <Select
          labelId="difficulty-select-label"
          id="difficulty-select"
          value={difficulty}
          label="Difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <MenuItem value="Easy">Easy</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Hard">Hard</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" variant="contained">
        Add Problem
      </Button>
    </Box>
  );
}

export default ProblemForm;