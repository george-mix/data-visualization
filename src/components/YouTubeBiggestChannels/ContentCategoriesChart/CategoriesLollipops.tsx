import React from 'react';
import {ScaleBand, ScaleLinear} from 'd3';
import {SvgCircle} from '@components/ChartElements/General/SvgCircle';
import {SvgLine} from '@components/ChartElements/General/SvgLine';
import {ContentCategoryInfo} from './contentCategoriesTypes';
import {SvgText} from '@components/ChartElements/General/SvgText';

type CategoriesLollipopsProps = {
  xScale: ScaleBand<string>;
  yScale: ScaleLinear<number, number, never>;
  categories: ContentCategoryInfo[];
  innerHeight: number;
  xValue: (_categoryInfo: ContentCategoryInfo) => string;
  yValue: (_categoryInfo: ContentCategoryInfo) => number;
}

const leftOffset = 70;
const textOffset = -16;

export const CategoriesLollipops: React.FC<CategoriesLollipopsProps> = ({
  xScale,
  yScale,
  categories,
  innerHeight,
  xValue,
  yValue,
}) => {
  const findXPosition = (category: ContentCategoryInfo) => {
    const xPosition = xScale(xValue(category));
    const xPositionWithOffset = xPosition === undefined ? 0 : xPosition + leftOffset;
    return xPositionWithOffset;
  };

  const findYPosition = (category: ContentCategoryInfo) => yScale(yValue(category));

  return (
    <>
      {categories.map((category) => {
        const xPosition = findXPosition(category);
        const yPosition = findYPosition(category);

        return (
          <g key={category.contentCategory}>
            <SvgLine
              x1={xPosition}
              x2={xPosition}
              y1={innerHeight}
              y2={yPosition}
              lineStroke={{color: 'secondary'}}
            />
            <SvgCircle
              cx={xPosition}
              cy={yPosition}
              circleFill={{color: 'secondary'}}
            />
            <SvgText
              dy={textOffset}
              textAnchor="middle"
              transform={`translate(${xPosition},${yPosition})`}
              textFill={{color: 'accentOne'}}
            >
              {category.quantity}
            </SvgText>
          </g>
        );
      })}
    </>
  );
};
