import React from 'react';
import {AppBar, Box, Container, Toolbar, useMediaQuery, useTheme} from '@mui/material';
import {LanguageSelector} from './LanguageSelector';
import {ThemeSelector} from './ThemeSelector';
import {HeaderLogo} from './HeaderLogo';
import {BurgerButton} from './BurgerButton';
import {MainNav} from './MainNav';

export const Header: React.FC = () => {
  const theme = useTheme();
  const isDownSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
          {!isDownSmall && <MainNav />}
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
            {isDownSmall && <BurgerButton />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
