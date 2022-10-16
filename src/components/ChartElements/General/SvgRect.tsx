import React from 'react';
import {useSvgChartPaletteColor} from '@helpers/hooks/useSvgChartPaletteColor';
import {SvgChartColorObject} from '@helpers/common/types';

type SvgRectProps = React.SVGProps<SVGRectElement> & {
  rectFill?: boolean | SvgChartColorObject;
  rectStroke?: boolean | SvgChartColorObject;
}

export const SvgRect: React.FC<SvgRectProps> = ({
  rectFill = true,
  rectStroke = false,
  ...rectProps
}) => {
  const fillColor = useSvgChartPaletteColor(rectFill, 'primary');
  const strokeColor = useSvgChartPaletteColor(rectStroke, 'secondary');

  return (
    <rect
      fill={fillColor}
      stroke={strokeColor}
      {...rectProps}
    />
  );
};
