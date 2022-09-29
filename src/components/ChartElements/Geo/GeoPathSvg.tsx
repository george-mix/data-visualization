import React from 'react';
import {GeoPathWithArgumentProps} from '@helpers/common/types';

export const GeoPathSvg: React.FC<GeoPathWithArgumentProps> = ({path, pathArgument, pathProps}) => (
  <path
    d={path(pathArgument) ?? undefined}
    {...pathProps}
  />
);
