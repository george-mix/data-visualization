import React from 'react';
import {Box, LinearProgress} from '@mui/material';

export const RouteFallback: React.FC = () => (
  <>
    <LinearProgress color="secondary" />
    <Box sx={{minHeight: '100vh'}} />
  </>
);
