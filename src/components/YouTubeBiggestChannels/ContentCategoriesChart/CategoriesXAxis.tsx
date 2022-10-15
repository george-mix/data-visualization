import React from 'react';
import {SvgText} from '@components/ChartElements/General/SvgText';
import {ScaleBand} from 'd3';

type CategoriesXAxisProps = {
  xScale: ScaleBand<string>;
  innerHeight: number;
}

export const CategoriesXAxis: React.FC<CategoriesXAxisProps> = ({xScale, innerHeight}) => {
  const findTickXCoordinate = (tick: string) => {
    const xCoordinate = xScale(tick);
    return xCoordinate === undefined ? 0 : xCoordinate + (xScale.bandwidth() / 2);
  };

  const translateHeight = innerHeight + 30;

  return (
    <>
      {xScale.domain().map((tick) => (
        <SvgText
          key={tick}
          transform={`translate(${findTickXCoordinate(tick)},${translateHeight}), rotate(45)`}
        >
          {tick}
        </SvgText>
      ))}
    </>
  );
};
