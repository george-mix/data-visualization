import React from 'react';
import {Typography} from '@mui/material';

export const CopyrightMessage: React.FC = () => (
  <Typography
    component="p"
    variant="body2"
    sx={{
      pt: 6,
    }}
  >
    ©2022
  </Typography>
);
