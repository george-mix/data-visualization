import {darkThemeColorSchemes, lightThemeColorSchemes} from '@helpers/common/data';
import {ColorSchemes} from '@helpers/common/interfaces';
import {KeysOfType} from '@helpers/common/types';
import {useThemeMode} from './useThemeMode';

type UseColorSchemeProps = KeysOfType<ColorSchemes, string[]>

export const useColorScheme = (schemeName: UseColorSchemeProps) => {
  const {themeMode} = useThemeMode();

  const colorSchemes = themeMode === 'light'
    ? lightThemeColorSchemes
    : darkThemeColorSchemes;

  const colorScheme = colorSchemes[schemeName];

  return colorScheme;
};
