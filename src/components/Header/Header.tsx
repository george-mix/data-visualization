import React from 'react';
import {AppBar, Box, Container, IconButton, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {LanguageSelector} from './LanguageSelector';
import {ThemeSelector} from './ThemeSelector';
import {useToggleDrawer} from '@helpers/hooks/useToggleDrawer';
import {HeaderLogo} from './HeaderLogo';

export const Header: React.FC = () => {
  const {toggleDrawerState} = useToggleDrawer();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: 'none',
        bgcolor: 'background.default',
      }}
    >
      <Container sx={{p: 0}}>
        <Toolbar sx={{bgcolor: 'background.default'}}>
          <HeaderLogo />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
              ml: 'auto',
            }}
          >
            <LanguageSelector />
            <ThemeSelector />
            <IconButton
              aria-label="menu"
              onClick={toggleDrawerState}
              sx={{
                p: 0,
                color: 'text.primary',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
