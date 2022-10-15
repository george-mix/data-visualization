import React from 'react';
import {SvgChartColorObject} from '@helpers/common/types';
import {useSvgChartPaletteColor} from '@helpers/hooks/useSvgChartPaletteColor';

type SvgCircleProps = React.SVGProps<SVGCircleElement> & {
  circleFill?: SvgChartColorObject;
}

export const SvgCircle: React.FC<SvgCircleProps> = ({
  circleFill,
  ...circleProps
}) => {
  const fillColor = useSvgChartPaletteColor(circleFill, 'primary');

  return (
    <circle
      fill={fillColor}
      r={10}
      {...circleProps}
    />
  );
};
