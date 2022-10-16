import React from 'react';
import {GeoPathProps} from '@helpers/common/types';
import {SvgPath} from '../General/SvgPath';

export const GeoPathSvg: React.FC<GeoPathProps> = ({path, pathArgument, pathProps}) => (
  <SvgPath
    d={path(pathArgument) ?? undefined}
    {...pathProps}
  />
);
