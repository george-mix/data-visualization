import React from 'react';
import {Box, Typography} from '@mui/material';

const NotFound: React.FC = () => (
  <Box>
    <Typography component="h1" variant="h1" color={'primary.light'}>
      404
    </Typography>
    <Typography component="h2" variant="h2" color={'text.secondary'}>
      Wrong page!
    </Typography>
  </Box>
);

export default NotFound;
