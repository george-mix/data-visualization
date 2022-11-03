import React from 'react';
import {ScaleLinear} from 'd3';
import {SvgLine} from '@components/ChartElements/General/SvgLine';
import {SvgText} from '@components/ChartElements/General/SvgText';

type XAxisProps = {
  xScale: ScaleLinear<number, number, never>;
  innerHeight: number;
}

const yTickOffset = 24;

export const TimelineXAxis: React.FC<XAxisProps> = ({xScale, innerHeight}) => (
  <>
    {xScale.ticks().map((tickValue) => (
      <g
        key={tickValue}
        transform={`translate(${xScale(tickValue)},0)`}
      >
        <SvgLine y2={innerHeight} lineStroke={{alpha: 0.05}} />
        <SvgText
          style={{textAnchor: 'middle'}}
          y={innerHeight + yTickOffset}>
          {tickValue}
        </SvgText>
      </g>
    ))}
  </>
);
