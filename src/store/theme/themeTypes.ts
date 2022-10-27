import {ColorSchemes} from '@helpers/common/interfaces';

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
  colorSchemes: ColorSchemes;
}
