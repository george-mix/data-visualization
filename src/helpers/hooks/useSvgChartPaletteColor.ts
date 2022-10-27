import {alpha} from '@mui/material';
import {SvgChartColorObject, SvgChartPaletteColor} from '@helpers/common/types';
import {useSelector} from 'react-redux';
import {themeSelector} from '@store/theme/themeSelectors';

type UseSvgChartPaletteColor = (
  _colorObject?: boolean | SvgChartColorObject,
  _defaultColor?: SvgChartPaletteColor,
) => string | undefined;

export const useSvgChartPaletteColor: UseSvgChartPaletteColor = (
  colorObject,
  defaultColor = 'neutral',
) => {
  const {colorSchemes} = useSelector(themeSelector);
  const svgPalette = colorSchemes.svgChartPalette;

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
