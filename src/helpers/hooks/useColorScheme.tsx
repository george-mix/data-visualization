import {useSelector} from 'react-redux';
import {AppPalette, ColorSchemes} from '@helpers/common/interfaces';
import {KeysOfType} from '@helpers/common/types';
import {themeSelector} from '@store/theme/themeSelectors';

type ColorSchemeReturnOptions = string[] | AppPalette;
type UseColorSchemeProps<T> = KeysOfType<ColorSchemes, T>

export const useColorScheme = <T extends ColorSchemeReturnOptions>(
  schemeName: UseColorSchemeProps<T>,
) => {
  const {colorSchemes} = useSelector(themeSelector);
  const colorScheme = colorSchemes[schemeName];

  return colorScheme;
};
