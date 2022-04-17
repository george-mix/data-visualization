import React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({toggleSidebar}) => (
  <Box sx={{flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        dataviz
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{mr: 2}}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);
