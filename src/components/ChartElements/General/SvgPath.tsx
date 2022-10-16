import React from 'react';
import {SvgPathProps} from '@helpers/common/types';
import {useSvgChartPaletteColor} from '@helpers/hooks/useSvgChartPaletteColor';

export const SvgPath: React.FC<SvgPathProps> = ({
  pathFill = true,
  pathStroke = false,
  ...pathProps
}) => {
  const fillColor = useSvgChartPaletteColor(pathFill);
  const strokeColor = useSvgChartPaletteColor(pathStroke);

  return (
    <path
      fill={fillColor}
      stroke={strokeColor}
      {...pathProps}
    />
  );
};
