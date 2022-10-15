import React from 'react';
import {SvgChartColorObject} from '@helpers/common/types';
import {useSvgChartPaletteColor} from '@helpers/hooks/useSvgChartPaletteColor';

type SvgLineProps = React.SVGProps<SVGLineElement> & {
  lineStroke?: SvgChartColorObject;
}

export const SvgLine: React.FC<SvgLineProps> = ({
  lineStroke,
  ...lineProps
}) => {
  const strokeColor = useSvgChartPaletteColor(lineStroke);

  return (
    <line
      stroke={strokeColor}
      strokeWidth={2}
      {...lineProps}
    />
  );
};
