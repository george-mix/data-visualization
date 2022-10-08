import {alpha} from '@mui/material';
import {useColorScheme} from './useColorScheme';
import {AppPalette} from '@helpers/common/interfaces';
import {SvgChartPaletteColor} from '@helpers/common/types';

type UseSvgChartPaletteColor = (_colorName: SvgChartPaletteColor, _alphaValue?: number) => string;

export const useSvgChartPaletteColor: UseSvgChartPaletteColor = (colorName, alphaValue) => {
  const svgPalette = useColorScheme<AppPalette>('svgChartPalette');
  const color = svgPalette[colorName];

  return alphaValue ? alpha(color, alphaValue) : color;
};
