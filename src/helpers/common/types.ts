import {SVGProps} from 'react';
import {SvgIconTypeMap, SxProps} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';
import {GeoPath, GeoPermissibleObjects} from 'd3';

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

export type GeoPathProps = {
  path: GeoPath<any, GeoPermissibleObjects>;
  pathProps?: SVGProps<SVGPathElement>;
}

export type GeoPathWithArgumentProps = GeoPathProps & {
  pathArgument: GeoPermissibleObjects;
}
