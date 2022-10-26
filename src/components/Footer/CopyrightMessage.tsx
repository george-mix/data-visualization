import React from 'react';
import {Typography} from '@mui/material';
import {appName} from '@helpers/common/data';

export const CopyrightMessage: React.FC = () => (
  <Typography
    component="p"
    variant="body2"
  >
    ©2022 {appName}
  </Typography>
);
