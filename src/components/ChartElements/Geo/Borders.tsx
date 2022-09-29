import React from 'react';
import {GeoPathWithArgumentProps} from '@helpers/common/types';
import {useTheme} from '@mui/material';
import {GeoPathSvg} from './GeoPathSvg';

export const Borders: React.FC<GeoPathWithArgumentProps> = ({path, pathArgument, pathProps}) => {
  const theme = useTheme();

  return (
    <GeoPathSvg
      path={path}
      pathArgument={pathArgument}
      pathProps={{
        fill: 'none',
        stroke: theme.palette.divider,
        ...pathProps,
      }}
    />
  );
};
