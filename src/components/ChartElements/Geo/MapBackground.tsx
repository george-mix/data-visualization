import React from 'react';
import {GeoPathProps} from '@helpers/common/types';
import {useTheme} from '@mui/material';
import {GeoPathSvg} from './GeoPathSvg';

export const MapBackground: React.FC<GeoPathProps> = ({path, pathProps}) => {
  const theme = useTheme();

  return (
    <GeoPathSvg
      path={path}
      pathArgument={{type: 'Sphere'}}
      pathProps={{
        fill: theme.palette.background.default,
        ...pathProps,
      }}
    />
  );
};
