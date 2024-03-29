import React from 'react';
import {SvgChartColorObject} from '@helpers/common/types';
import {useSvgChartPaletteColor} from '@helpers/hooks/useSvgChartPaletteColor';

type SvgCircleProps = React.SVGProps<SVGCircleElement> & {
  circleFill?: boolean | SvgChartColorObject;
  circleStroke?: boolean | SvgChartColorObject;
  innerRef?: any,
}

export const SvgCircle: React.FC<SvgCircleProps> = ({
  circleFill = true,
  circleStroke = false,
  children,
  innerRef,
  ...circleProps
}) => {
  const fillColor = useSvgChartPaletteColor(circleFill, 'primary');
  const strokeColor = useSvgChartPaletteColor(circleStroke, 'secondary');

  return (
    <circle
      fill={fillColor || 'none'}
      r={10}
      stroke={strokeColor}
      ref={innerRef}
      {...circleProps}
    >
      {children}
    </circle>
  );
};
