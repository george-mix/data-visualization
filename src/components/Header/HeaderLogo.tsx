import React from 'react';
import {Typography} from '@mui/material';
import {appName} from '@helpers/common/data';
import {RouterLink} from '@components/UI/RouterLink';
import {AppPaths} from '@router/routes';

export const HeaderLogo: React.FC = () => (
  <RouterLink to={AppPaths.Home} mr= "auto">
    <Typography
      variant="h5"
      component="p"
      sx={{
        color: 'text.primary',
      }}
    >
      {appName}
    </Typography>
  </RouterLink>
);
