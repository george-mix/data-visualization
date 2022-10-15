import {alpha} from '@mui/material';
import {useColorScheme} from './useColorScheme';
import {AppPalette} from '@helpers/common/interfaces';
import {SvgChartColorObject, SvgChartPaletteColor} from '@helpers/common/types';

type UseSvgChartPaletteColor = (
  _colorObject?: boolean | SvgChartColorObject,
  _defaultColor?: SvgChartPaletteColor,
) => string | undefined;

export const useSvgChartPaletteColor: UseSvgChartPaletteColor = (
  colorObject,
  defaultColor = 'neutral',
) => {
  const svgPalette = useColorScheme<AppPalette>('svgChartPalette');

  if (colorObject === false) {
    return undefined;
  }

  if (colorObject === true) {
    return svgPalette[defaultColor];
  }

  const colorName = colorObject?.color || defaultColor;
  const color = svgPalette[colorName];

  return colorObject?.alpha ? alpha(color, colorObject.alpha) : color;
};
