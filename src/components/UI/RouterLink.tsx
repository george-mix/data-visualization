import React from 'react';
import {Link, LinkProps} from '@mui/material';
import {Link as ReactRouterLink} from 'react-router-dom';

export const RouterLink: React.FC<LinkProps<any>> = ({
  children,
  to,
  sx,
  ...restProps
}) => (
  <Link
    component={ReactRouterLink}
    to={to}
    underline="none"
    sx={{
      color: 'text.primary',
      ...sx,
    }}
    {...restProps}
  >
    {children}
  </Link>
);
