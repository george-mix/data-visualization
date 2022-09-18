import React from 'react';
import {Box, Container} from '@mui/material';

export const Main: React.FC = ({children}) => (
  <Container component="main">
    <Box
      sx={{
        pt: 12,
        pb: 12,
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  </Container>
);
