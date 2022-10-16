import React from 'react';
import {SvgText} from '@components/ChartElements/General/SvgText';
import {SvgCircle} from '@components/ChartElements/General/SvgCircle';

type ColorLegendItemProps = {
  translateWidth: number;
  translateHeight: number;
  color: string;
  text: string;
}

const fontSize = 18;
const yOffset = 6;
const xOffset = 14;

export const ColorLegendItem: React.FC<ColorLegendItemProps> = ({
  translateWidth,
  translateHeight,
  color,
  text,
}) => (
  <g transform={`translate(${translateWidth}, ${translateHeight})`}>
    <SvgCircle fill={color} />
    <SvgText
      fontSize={fontSize}
      y={yOffset}
      x={xOffset}
    >
      - {text}
    </SvgText>
  </g>
);
