import React from 'react';
import {useTheme} from '@mui/material';
import {ColorLegendItem} from './ColorLegendItem';

type ColorLegendProps = {
  colorRange: string[],
  width: number;
  height: number;
}

export const ColorLegend: React.FC<ColorLegendProps> = ({colorRange, width, height}) => {
  const theme = useTheme();
  const legendHeight = 80;
  const translateHeight = -(legendHeight / 2);
  const firstColor = colorRange[0];
  const secondColor = colorRange[1];

  return (
    <g transform={`translate(0, ${height})`}>
      <rect
        y={-legendHeight}
        width={width}
        height={legendHeight}
        fill={theme.palette.background.default}
      />
      <ColorLegendItem
        translateWidth={100}
        translateHeight={translateHeight}
        color={firstColor}
        text="- lowest number of channels"
      />
      <ColorLegendItem
        translateWidth={500}
        translateHeight={translateHeight}
        color={secondColor}
        text="- highest number of channels"
      />
    </g>
  );
};
