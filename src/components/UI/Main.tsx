import React from 'react';
import {Container} from '@mui/material';

export const Main: React.FC = ({children}) => (
  <Container
    component="main"
    sx={{
      pt: 12,
      pb: 2,
      overflow: 'hidden',
      minHeight: '84vh',
    }}
  >
    {children}
  </Container>
);
