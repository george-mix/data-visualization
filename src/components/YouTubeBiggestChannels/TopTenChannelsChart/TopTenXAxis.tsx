import React from 'react';
import {ScaleLinear} from 'd3';
import {SvgLine} from '@components/ChartElements/General/SvgLine';
import {SvgText} from '@components/ChartElements/General/SvgText';

type TopTenXAxisProps = {
  xScale: ScaleLinear<number, number, never>;
  width: number;
  height: number;
}

const tickYOffset = 24;
const tickLabelYOffset = 84;

export const TopTenXAxis: React.FC<TopTenXAxisProps> = ({xScale, width, height}) => (
  <>
    {xScale.ticks().map((tick) => (
      <g
        key={tick}
        transform={`translate(${xScale(tick)},0)`}
      >
        <SvgLine
          y2={height}
          lineStroke={{color: 'primary', alpha: 0.15}}
        />
        <SvgText
          y={height + tickYOffset}
          style={{textAnchor: 'middle'}}
        >
          {tick}
        </SvgText>
      </g>
    ))}
    <SvgText
      x={width / 2}
      y={height + tickLabelYOffset}
      textAnchor="middle"
      fontSize={24}
    >
      Subscribers (mln)
    </SvgText>
  </>
);
