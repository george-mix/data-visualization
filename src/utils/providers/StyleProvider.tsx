import React from 'react';
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';

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
  typography: {
    body2: {
      fontFamily: 'Lato',
    },
    subtitle1: {
      fontFamily: 'Lato',
    },
  },
});

export const StyleProvider: React.FC = ({children}) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
