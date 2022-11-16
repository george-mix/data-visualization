import React from 'react';
import {Box, List} from '@mui/material';
import {FooterCategorySubheader} from './FooterCategorySubheader';
import {MainRouteLinks} from '@components/Navigation/MainRouteLinks';

export const PageList: React.FC = () => (
  <Box sx={{pb: 2}}>
    <FooterCategorySubheader text="common.pages" />
    <List>
      <MainRouteLinks />
    </List>
  </Box>
);
