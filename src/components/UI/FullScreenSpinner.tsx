import React from 'react';
import {CircularProgress} from '@mui/material';
import {styled} from '@mui/system';

const FullScreenPaper = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.background.paper,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const FullScreenSpinner: React.FC = () => (
  <FullScreenPaper >
    <CircularProgress disableShrink color="secondary"/>
  </FullScreenPaper>
);
