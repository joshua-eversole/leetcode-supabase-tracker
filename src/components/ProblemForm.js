import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

// --- Import MUI components ---
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function ProblemForm({ onSubmit }) {
  const [showForm, setShowForm] = useState(false); // for visibility of the non-leetcode forms

  const [url, setUrl] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const [title, setTitle] = useState('');
  const [external_id, setExternalId] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [tags, setTags] = useState([]);

  const extractSlug = (inputUrl) => {
    try {
      const cleanUrl = inputUrl.endsWith('/') ? inputUrl.slice(0, -1) : inputUrl;
      const parts = cleanUrl.split('/');
      const problemIndex = parts.indexOf('problems');
      if (problemIndex !== -1 && parts[problemIndex + 1]) {
        return parts[problemIndex + 1];
      }
      return null;
    } catch (e) {
      return null;
    }
  };

  const handleFetchInfo = async () => {
    setFetchError(null);
    const slug = extractSlug(url);

    if (!slug) {
      setFetchError("Could not find a valid problem ID in that URL.");
      return;
    }

    setIsFetching(true);

    const { data, error } = await supabase.functions.invoke('leetcode-proxy', {
      body: { slug: slug }
    });

    setIsFetching(false);

    if (error) {
      console.error("Function error:", error);
      setFetchError("Failed to fetch data. Is the URL correct?");
      return;
    }

    const question = data?.data?.question;
    if (!question) {
      setFetchError("LeetCode didn't return data for this problem.");
      return;
    }

    // Auto-fill the form
    setTitle(question.title);
    setExternalId(question.titleSlug);
    setDifficulty(question.difficulty);
    
    const tagNames = question.topicTags ? question.topicTags.map(t => t.name) : [];
    setTags(tagNames);

    // --- Reveal the form if it's auto-filled successfully
    setShowForm(true); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !external_id) return;

    onSubmit(title, external_id, difficulty, tags);

    setTitle('');
    setExternalId('');
    setDifficulty('Easy');
    setUrl('');
    setTags([]);
    setShowForm(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, m: 2 }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          label="Paste LeetCode URL"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://leetcode.com/problems/..."
        />
        <Button 
          variant="contained" 
          onClick={handleFetchInfo}
          disabled={!url || isFetching}
          sx={{ minWidth: '100px' }}
        >
          {isFetching ? <CircularProgress size={24} color="inherit" /> : "Auto-Fill"}
        </Button>
      </Box>

      {fetchError && <Alert severity="error">{fetchError}</Alert>}

      {!showForm && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
                variant="text" 
                size="small" 
                onClick={() => setShowForm(true)}
                sx={{ textTransform: 'none', color: 'text.secondary' }}
            >
                Or click here to insert manually
            </Button>
        </Box>
      )}


      {showForm && (
        <>
            <TextField
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                InputLabelProps={{ shrink: true }}
            />

            <TextField
                label="External ID (Slug)"
                variant="outlined"
                value={external_id}
                onChange={(e) => setExternalId(e.target.value)}
                required
                InputLabelProps={{ shrink: true }}
            />

            {tags.length > 0 && (
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {tags.map((tag, index) => (
                        <Chip key={index} label={tag} size="small" />
                    ))}
                </Stack>
            )}

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

            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                    type="button" 
                    variant="outlined" 
                    color="inherit"
                    fullWidth
                    onClick={() => setShowForm(false)}
                >
                    Cancel
                </Button>
                <Button type="submit" variant="contained" size="large" fullWidth>
                    Add Problem
                </Button>
            </Box>
        </>
      )}
    </Box>
  );
}

export default ProblemForm;