import React from 'react';
import {ScaleBand} from 'd3';
import {SvgText} from '@components/ChartElements/General/SvgText';

type TopTenYAxisProps = {
  yScale: ScaleBand<string>;
}

export const TopTenYAxis: React.FC<TopTenYAxisProps> = ({yScale}) => {
  const findTickYCoordinate = (tick: string) => {
    const yCoordinate = yScale(tick);
    return yCoordinate === undefined ? 0 : yCoordinate + (yScale.bandwidth() / 2);
  };

  return (
    <>
      {yScale.domain().map((tick) => (
        <g
          key={tick}
          transform={`translate(0,${findTickYCoordinate(tick)})`}
        >
          <SvgText
            dy={6}
            dx={8}
            style={{textAnchor: 'start'}}
            fontSize={16}
            textFill={{color: 'background'}}
          >
            {tick}
          </SvgText>
        </g>
      ))}
    </>
  );
};
