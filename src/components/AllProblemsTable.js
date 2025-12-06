import React from 'react';

// --- Import Utilities ---
import { formatRelativeDate } from '../utilities/dateHelper';

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

function AllProblemsTable({ problems }) {
  
  // color-code the difficulty ofthe problems
  const getDifficultyColor = (diff) => {
    if (diff === 'Easy') return 'success';
    if (diff === 'Medium') return 'warning';
    if (diff === 'Hard') return 'error';
    return 'default';
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="all problems table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Difficulty</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Last Reviewed</TableCell>
            <TableCell>Next Review</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link 
                    href={`https://leetcode.com/problems/${row.external_id}/`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    underline="hover"
                >
                    {row.title}
                </Link>
              </TableCell>
              
              <TableCell>
                <Chip 
                    label={row.difficulty} 
                    color={getDifficultyColor(row.difficulty)} 
                    size="small" 
                    variant="outlined" 
                />
              </TableCell>
              
              <TableCell>
                 {row.tags && row.tags.map((tag, i) => (
                     <Chip key={i} label={tag} size="small" sx={{ mr: 0.5, fontSize: '0.7em' }} />
                 ))}
              </TableCell>
              
            {/* Update the Last Reviewed Column */}
              <TableCell>{formatRelativeDate(row.reviewData?.last_reviewed_at)}</TableCell>
              
              {/* Update the Next Review Column */}
              <TableCell>
                  <Typography 
                    variant="body2" 
                    color={
                        row.reviewData && new Date(row.reviewData.next_review_at) <= new Date() 
                        ? "error.main" 
                        : "text.primary"
                    }
                  >
                    {formatRelativeDate(row.reviewData?.next_review_at)}
                  </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AllProblemsTable;