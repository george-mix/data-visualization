import React from 'react';
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import {useThemeMode} from '@helpers/hooks/useThemeMode';

const typography = {
  body2: {
    fontFamily: 'Lato',
  },
  subtitle1: {
    fontFamily: 'Lato',
  },
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#fff9f5',
    },
    primary: {
      main: '#f7501f',
    },
    secondary: {
      main: '#af4627',
      contrastText: '#f9f0f0',
    },
    error: {
      main: '#f60867',
    },
    warning: {
      main: '#ffc375',
    },
    info: {
      main: '#6c3c2e',
    },
    success: {
      main: '#63af13',
    },
    divider: 'rgba(198,205,207,0.22)',
    background: {
      default: '#121b24',
      paper: '#000704',
    },
  },
  typography,
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#05141a',
    },
    primary: {
      main: '#174668',
    },
    secondary: {
      main: '#cd9ea0',
      contrastText: '#05141a',
    },
    error: {
      main: '#f40e0f',
    },
    warning: {
      main: '#e5cb1e',
    },
    info: {
      main: '#c67861',
    },
    success: {
      main: '#1ea65e',
    },
    divider: 'rgba(87,55,59,0.29)',
  },
  typography,
});

export const StyleProvider: React.FC = ({children}) => {
  const {themeMode} = useThemeMode();
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
