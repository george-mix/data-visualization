import React from 'react';
import {GeoPathProps} from '@helpers/common/types';
import {GeoPathSvg} from './GeoPathSvg';

export const Graticule: React.FC<GeoPathProps> = ({path, pathArgument, pathProps}) => (
  <GeoPathSvg
    path={path}
    pathArgument={pathArgument}
    pathProps={{
      fill: 'none',
      pathStroke: {alpha: 0.05},
      ...pathProps,
    }}
  />
);
