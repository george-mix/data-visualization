import React from 'react';
import {SvgPolylineProps} from '@helpers/common/types';
import {useSvgChartPaletteColor} from '@helpers/hooks/useSvgChartPaletteColor';

export const SvgPolyline: React.FC<SvgPolylineProps> = ({
  polylineStroke,
  ...polylineProps
}) => {
  const strokeColor = useSvgChartPaletteColor(polylineStroke, 'text');

  return (
    <polyline
      stroke={strokeColor}
      strokeWidth={1}
      {...polylineProps}
    />
  );
};
