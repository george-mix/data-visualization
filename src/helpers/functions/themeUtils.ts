import {darkThemeColorSchemes, lightThemeColorSchemes} from '@helpers/common/data';
import {ThemeMode} from '@store/theme/themeTypes';

export const toggleThemeMode = (themeMode: ThemeMode): ThemeMode => {
  const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
  return newThemeMode;
};

export const toggleThemeColorSchemes = (themeMode: ThemeMode) => {
  const colorSchemes = themeMode === 'light'
    ? lightThemeColorSchemes
    : darkThemeColorSchemes;

  return colorSchemes;
};
