import React from 'react';
import {GeoPathWithArgumentProps} from '@helpers/common/types';
import {alpha, useTheme} from '@mui/material';
import {GeoPathSvg} from './GeoPathSvg';

export const Graticule: React.FC<GeoPathWithArgumentProps> = ({path, pathArgument, pathProps}) => {
  const theme = useTheme();

  return (
    <GeoPathSvg
      path={path}
      pathArgument={pathArgument}
      pathProps={{
        fill: 'none',
        stroke: alpha(theme.palette.divider, 0.05),
        ...pathProps,
      }}
    />
  );
};
