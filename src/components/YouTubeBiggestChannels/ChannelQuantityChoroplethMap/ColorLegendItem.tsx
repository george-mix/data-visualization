import React from 'react';
import {useTheme} from '@mui/material';

type ColorLegendItemProps = {
  translateWidth: number;
  translateHeight: number;
  color: string;
  text: string;
}

export const ColorLegendItem: React.FC<ColorLegendItemProps> = ({
  translateWidth,
  translateHeight,
  color,
  text,
}) => {
  const theme = useTheme();
  const colorCircleRadius = 12;

  return (
    <g transform={`translate(${translateWidth}, ${translateHeight})`}>
      <circle r={colorCircleRadius} fill={color} />
      <text
        fontSize="1.5em"
        y="0.32em"
        x="0.7em"
        fill={theme.palette.text.primary}
      >
        {text}
      </text>
    </g>
  );
};
