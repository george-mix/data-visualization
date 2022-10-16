import {SVGProps} from 'react';
import {SvgIconTypeMap, SxProps} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';
import {GeoPath, GeoPermissibleObjects} from 'd3';
import {AppPalette} from './interfaces';

export type KeysOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V? P: never]: any
};

export type TextComponentProps = {
  text: string;
  sx?: SxProps
}

export type MuiIcon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
}

export type SvgChartPaletteColor = KeysOfType<AppPalette, string>;

export type SvgChartColorObject = {
  color?: SvgChartPaletteColor;
  alpha?: number;
};

export type SvgPathProps = SVGProps<SVGPathElement> & {
  pathFill?: SvgChartColorObject;
  pathStroke?: SvgChartColorObject;
}

export type GeoPathProps = {
  path: GeoPath<any, GeoPermissibleObjects>;
  pathArgument: GeoPermissibleObjects;
  pathProps?: SvgPathProps;
}
