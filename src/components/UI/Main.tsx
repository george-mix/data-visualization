import {Box, Container} from '@mui/material';
import React from 'react';

export const Main: React.FC = ({children}) => (
  <Container component="main">
    <Box sx={{pt: 12, pb: 12}}>
      {children}
    </Box>
  </Container>
);
