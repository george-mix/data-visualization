import React from 'react';
import {Box, Divider, Drawer as SideNavigation} from '@mui/material';
import {articleRoutes, mainRoutes} from '@router/routes';
import {NavList} from './NavList';
import {useToggleDrawer} from '@helpers/hooks/useToggleDrawer';

export const Drawer: React.FC = () => {
  const {isDrawerOpen, toggleDrawerState} = useToggleDrawer();

  return (
    <SideNavigation anchor={'right'}
      open={isDrawerOpen}
      onClose={toggleDrawerState}
    >
      <Box
        component="nav"
        sx={{width: 250}}
        onClick={toggleDrawerState}
        onKeyDown={toggleDrawerState}
      >
        <NavList routes={mainRoutes}/>
        <Divider />
        <NavList routes={articleRoutes} />
      </Box>
    </SideNavigation>
  );
};
