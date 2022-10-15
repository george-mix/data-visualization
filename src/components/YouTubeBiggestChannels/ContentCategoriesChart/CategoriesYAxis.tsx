import React from 'react';
import {ScaleLinear} from 'd3';
import {SvgLine} from '@components/ChartElements/General/SvgLine';
import {SvgText} from '@components/ChartElements/General/SvgText';

type CategoriesYAxisProps = {
  yScale: ScaleLinear<number, number, never>;
  innerWidth: number;
}

const labelOffsetX = -10;
const labelOffsetY = 5;

export const CategoriesYAxis: React.FC<CategoriesYAxisProps> = ({
  yScale,
  innerWidth,
}) => (
  <>
    {yScale.ticks(5).map((tick) => (
      <g
        key={tick}
        transform={`translate(0, ${yScale(tick)})`}
      >
        <SvgLine
          x2={innerWidth}
          lineStroke={{alpha: 0.3, color: 'info'}}
        />
        <SvgText
          dx={labelOffsetX}
          dy={labelOffsetY}
          textAnchor="end"
        >
          {tick}
        </SvgText>
      </g>
    ))}
  </>
);
