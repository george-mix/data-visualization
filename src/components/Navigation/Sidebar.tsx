import React from 'react';
import {Box, Divider, Drawer} from '@mui/material';
import {articleRoutes, mainRoutes} from '@utils/routes';
import {NavList} from './NavList';
import {LanguageSelector} from '@components/Internationalization/LanguageSelector';

interface SidebarProps {
  sidebar: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({sidebar, toggleSidebar}) => (
  <Drawer anchor={'right'}
    open={sidebar}
    onClose={toggleSidebar}
  >
    <LanguageSelector />
    <Box
      sx={{width: 250}}
      role="navigation"
      onClick={toggleSidebar}
      onKeyDown={toggleSidebar}
    >
      <NavList routes={mainRoutes}/>
      <Divider />
      <NavList routes={articleRoutes} />
    </Box>
  </Drawer>
);

