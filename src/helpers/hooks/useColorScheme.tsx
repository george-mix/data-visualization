import {darkThemeColorSchemes, lightThemeColorSchemes} from '@helpers/common/data';
import {AppPalette, ColorSchemes} from '@helpers/common/interfaces';
import {KeysOfType} from '@helpers/common/types';
import {useThemeMode} from './useThemeMode';

type ColorSchemeReturnOptions = string[] | AppPalette;

type UseColorSchemeProps<T > = KeysOfType<ColorSchemes, T>

export const useColorScheme = <T extends ColorSchemeReturnOptions>(
  schemeName: UseColorSchemeProps<T>,
) => {
  const {themeMode} = useThemeMode();

  const colorSchemes = themeMode === 'light'
    ? lightThemeColorSchemes
    : darkThemeColorSchemes;

  const colorScheme = colorSchemes[schemeName];

  return colorScheme;
};
