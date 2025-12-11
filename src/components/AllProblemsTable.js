import React, { useState, useMemo } from 'react';

// --- MUI Table Components ---
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
// Edit and Delete Buttons
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';         
import DialogActions from '@mui/material/DialogActions'; 
import DialogContent from '@mui/material/DialogContent'; 
import DialogTitle from '@mui/material/DialogTitle';     
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// Import the date helper
import { formatRelativeDate } from '../utilities/dateHelper';

function AllProblemsTable({ problems, onDelete, onEdit }) {
  // State for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  // Edit state
  const [openEdit, setOpenEdit] = useState(false);
  const [editingProblem, setEditingProblem] = useState(null);

  // Form fields for editing
  const [editTitle, setEditTitle] = useState('');
  const [editSlug, setEditSlug] = useState('');
  const [editDiff, setEditDiff] = useState('Easy');
  const [editTagsStr, setEditTagsStr] = useState('');


  // Use useMemo to look at all problems and find every unique tag being used
  const allUniqueTags = useMemo(() => {
    const tags = new Set();
    problems.forEach(p => {
      if (p.tags) {
        p.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [problems]);

  const filteredProblems = problems.filter(problem => {
    // Title Match (Case insensitive)
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Tag Match
    const matchesTag = selectedTag === 'All' 
        ? true 
        : problem.tags && problem.tags.includes(selectedTag);

    // Difficulty Match
    const matchesDifficulty = selectedDifficulty === 'All'
        ? true
        : problem.difficulty === selectedDifficulty;

    return matchesSearch && matchesTag && matchesDifficulty;
  });

  // Edit handler
  const handleOpenEdit = (problem) => {
    setEditingProblem(problem);
    setEditTitle(problem.title);
    setEditSlug(problem.external_id);
    setEditDiff(problem.difficulty);
    // Convert array to string for easier editing
    setEditTagsStr(problem.tags ? problem.tags.join(', ') : '');
    setOpenEdit(true);
  };

  // Save the edits
  const handleSaveEdit = () => {
    // Convert string back to array
    const tagsArray = editTagsStr.split(',').map(t => t.trim()).filter(t => t.length > 0);

    onEdit({
        ...editingProblem,
        title: editTitle,
        external_id: editSlug,
        difficulty: editDiff,
        tags: tagsArray
    });
    setOpenEdit(false);
  };

  // Delete handler
  const handleDeleteClick = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
        onDelete(id);
    }
  };



  // color-code the difficulty
  const getDifficultyColor = (diff) => {
    if (diff === 'Easy') return 'success';
    if (diff === 'Medium') return 'warning';
    if (diff === 'Hard') return 'error';
    return 'default';
  };

  if (!problems || problems.length === 0) {
    return <Typography sx={{ p: 4, textAlign: 'center' }}>No problems found.</Typography>;
  }

  return (
    <Box>
      {/* Filters */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField 
          label="Search by Title" variant="outlined" size="small"
          value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ minWidth: 200, flexGrow: 1 }}
        />
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Filter by Tag</InputLabel>
          <Select value={selectedTag} label="Filter by Tag" onChange={(e) => setSelectedTag(e.target.value)}>
            <MenuItem value="All"><em>All Tags</em></MenuItem>
            {allUniqueTags.map(tag => <MenuItem key={tag} value={tag}>{tag}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Difficulty</InputLabel>
          <Select value={selectedDifficulty} label="Difficulty" onChange={(e) => setSelectedDifficulty(e.target.value)}>
            <MenuItem value="All"><em>All Difficulties</em></MenuItem>
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Table starts here */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="all problems table">
          <TableHead>
            <TableRow sx={{ bgcolor: 'action.hover' }}>
              <TableCell>Title</TableCell>
              <TableCell>Difficulty</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Last Reviewed</TableCell>
              <TableCell>Next Review</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProblems.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Link href={`https://leetcode.com/problems/${row.external_id}/`} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ fontWeight: 'medium' }}>
                    {row.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Chip label={row.difficulty} color={getDifficultyColor(row.difficulty)} size="small" variant="outlined" />
                </TableCell>
                <TableCell>
                   {row.tags && row.tags.map((tag, i) => (
                       <Chip key={i} label={tag} size="small" sx={{ mr: 0.5, fontSize: '0.7em' }} />
                   ))}
                </TableCell>
                <TableCell>{formatRelativeDate(row.reviewData?.last_reviewed_at)}</TableCell>
                <TableCell>
                    <Typography variant="body2" color={row.reviewData && new Date(row.reviewData.next_review_at) <= new Date() ? "error.main" : "text.primary"}>
                        {formatRelativeDate(row.reviewData?.next_review_at)}
                    </Typography>
                </TableCell>
                
                {/* Action column*/}
                <TableCell align="right">
                    <IconButton size="small" onClick={() => handleOpenEdit(row)}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={() => handleDeleteClick(row.id, row.title)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit dialog*/}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Problem</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: '400px', mt: 1 }}>
            <TextField 
                label="Title" fullWidth variant="outlined" 
                value={editTitle} onChange={(e) => setEditTitle(e.target.value)} 
            />
            <TextField 
                label="External ID (Slug)" fullWidth variant="outlined" 
                value={editSlug} onChange={(e) => setEditSlug(e.target.value)} 
            />
            
            <FormControl fullWidth>
                <InputLabel>Difficulty</InputLabel>
                <Select
                    value={editDiff}
                    label="Difficulty"
                    onChange={(e) => setEditDiff(e.target.value)}
                >
                    <MenuItem value="Easy">Easy</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Hard">Hard</MenuItem>
                </Select>
            </FormControl>

            <TextField 
                label="Tags (comma separated)" 
                fullWidth variant="outlined" 
                value={editTagsStr} 
                onChange={(e) => setEditTagsStr(e.target.value)} 
                helperText="e.g. Array, Dynamic Programming, Two Pointers"
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
            <Button onClick={handleSaveEdit} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default AllProblemsTable;