import React from 'react';
import { IComment } from '@/models/IProduct.ts';
import { Box, Grid, Paper, styled, Typography } from '@mui/material';

type CommentsListProps = {
  comments?: IComment[]
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  if (!comments) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      {
        comments?.map(comment => (
          <StyledPaper
            key={comment.id}
            sx={{
              my: 1,
              mx: 'auto',
              p: 2,
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{comment.description}</Typography>
              </Grid>
            </Grid>
          </StyledPaper>
        ))
      }
    </Box>
  );
};

export default CommentsList;