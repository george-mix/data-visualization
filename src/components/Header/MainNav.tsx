import React from 'react';
import {List} from '@mui/material';
import {MainRouteLinks} from '@components/Navigation/MainRouteLinks';
import {ArticleNav} from './ArticleNav';

export const MainNav: React.FC = () => (
  <List
    component="nav"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      m: 'auto',
    }}
  >
    <MainRouteLinks />
    <ArticleNav />
  </List>
);
