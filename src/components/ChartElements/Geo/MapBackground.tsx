import React from 'react';
import {GeoPathProps} from '@helpers/common/types';
import {GeoPathSvg} from './GeoPathSvg';

export const MapBackground: React.FC<GeoPathProps> = ({
  path,
  pathArgument,
  pathProps,
}) => (
  <GeoPathSvg
    path={path}
    pathArgument={pathArgument}
    pathProps={{
      pathFill: {color: 'background'},
      ...pathProps,
    }}
  />
);
