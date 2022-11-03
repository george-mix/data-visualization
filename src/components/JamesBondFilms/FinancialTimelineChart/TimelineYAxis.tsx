import React from 'react';
import {ScaleLinear} from 'd3';
import {SvgLine} from '@components/ChartElements/General/SvgLine';
import {SvgText} from '@components/ChartElements/General/SvgText';

type YAxisProps = {
  yScale: ScaleLinear<number, number, never>;
  innerWidth: number;
  innerHeight: number;
}

const xTickOffset = -16;
const yTickOffset = 5;
const yAxisLabel = 'Million USD';
const yAxisLabelOffset = -64;

export const TimelineYAxis: React.FC<YAxisProps> = ({yScale, innerWidth, innerHeight}) => (
  <>
    {yScale.ticks().map((tickValue) => (
      <g
        key={tickValue}
        transform={`translate(0,${yScale(tickValue)})`}
      >
        <SvgLine x2={innerWidth} lineStroke={{alpha: 0.05}} />
        <SvgText
          style={{textAnchor: 'end'}}
          x={xTickOffset}
          dy={yTickOffset}
        >
          {tickValue}
        </SvgText>
      </g>
    ))}
    <SvgText
      textAnchor="middle"
      transform={
        `translate(${yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`
      }
    >
      {yAxisLabel}
    </SvgText>
  </>
);
