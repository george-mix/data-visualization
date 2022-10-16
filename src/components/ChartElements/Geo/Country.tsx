import React from 'react';
import {GeoPathProps} from '@helpers/common/types';
import {useColorScheme} from '@helpers/hooks/useColorScheme';
import {AppPalette} from '@helpers/common/interfaces';
import {GeoPathSvg} from './GeoPathSvg';

export const Country: React.FC<GeoPathProps> = ({path, pathArgument, pathProps}) => {
  const {neutral} = useColorScheme<AppPalette>('svgChartPalette');

  return (
    <GeoPathSvg
      path={path}
      pathArgument={pathArgument}
      pathProps={{
        fill: neutral,
        ...pathProps,
      }}
    />
  );
};
