import React from 'react';
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import {useThemeMode} from '@helpers/hooks/useThemeMode';
import {darkThemePalette, lightThemePalette} from '@helpers/common/data';

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
      primary: darkThemePalette.text,
    },
    background: {
      default: darkThemePalette.background,
    },
    primary: {
      main: darkThemePalette.primary,
    },
    secondary: {
      main: darkThemePalette.secondary,
      contrastText: darkThemePalette.text,
    },
    info: {
      main: darkThemePalette.info,
      light: darkThemePalette.infoLight,
    },
    success: {
      main: darkThemePalette.success,
    },
    warning: {
      main: darkThemePalette.warning,
    },
    error: {
      main: darkThemePalette.error,
    },
    divider: darkThemePalette.neutral,
  },
  typography,
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: lightThemePalette.text,
    },
    background: {
      default: lightThemePalette.background,
    },
    primary: {
      main: lightThemePalette.primary,
    },
    secondary: {
      main: lightThemePalette.secondary,
      contrastText: lightThemePalette.text,
    },
    info: {
      main: lightThemePalette.info,
      light: lightThemePalette.infoLight,
    },
    success: {
      main: lightThemePalette.success,
    },
    warning: {
      main: lightThemePalette.warning,
    },
    error: {
      main: lightThemePalette.error,
    },
    divider: lightThemePalette.neutral,
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
