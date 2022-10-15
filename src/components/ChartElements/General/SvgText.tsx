import React from 'react';
import {SvgChartColorObject} from '@helpers/common/types';
import {useSvgChartPaletteColor} from '@helpers/hooks/useSvgChartPaletteColor';

type SvgTextProps = React.SVGProps<SVGTextElement> & {
  textFill?: SvgChartColorObject;
}

export const SvgText: React.FC<SvgTextProps> = ({
  children,
  textFill,
  ...textProps
}) => {
  const fillColor = useSvgChartPaletteColor(textFill, 'text');

  return (
    <text
      fill={fillColor}
      fontSize={16}
      {...textProps}
    >
      {children}
    </text>
  );
};
