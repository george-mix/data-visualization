import React from 'react';
import {AppPalette} from '@helpers/common/interfaces';
import {useColorScheme} from '@helpers/hooks/useColorScheme';
import {SvgRect} from '@components/ChartElements/General/SvgRect';
import {ColorLegendItem} from './ColorLegendItem';

type ColorLegendProps = {
  colorRange: string[];
  height: number;
}

const legendHeight = 160;
const legendWidth = 280;
const step = -40;
const translateWidth = 20;
const strokeWidth = 2;

export const ColorLegend: React.FC<ColorLegendProps> = ({colorRange, height}) => {
  const {neutral} = useColorScheme<AppPalette>('svgChartPalette');
  const firstColor = colorRange[0];
  const secondColor = colorRange[1];

  return (
    <g transform={`translate(${strokeWidth}, ${height - strokeWidth})`}>
      <SvgRect
        y={-legendHeight}
        width={legendWidth}
        height={legendHeight}
        rectFill={{color: 'background', alpha: 0.7}}
        rectStroke={{color: 'primary', alpha: 0.3}}
        strokeWidth={strokeWidth}
      />
      <ColorLegendItem
        translateWidth={translateWidth}
        translateHeight={3 * step}
        color={firstColor}
        text="lowest number of channels"
      />
      <ColorLegendItem
        translateWidth={translateWidth}
        translateHeight={2 * step}
        color={secondColor}
        text="highest number of channels"
      />
      <ColorLegendItem
        translateWidth={translateWidth}
        translateHeight={step}
        color={neutral}
        text="no data"
      />
    </g>
  );
};
