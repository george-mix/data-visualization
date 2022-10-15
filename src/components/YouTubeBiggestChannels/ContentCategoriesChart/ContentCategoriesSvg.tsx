import React from 'react';
import {max, rollups, scaleBand, scaleLinear} from 'd3';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {ResponsiveSvg} from '@components/ChartElements/ResponsiveSvg';
import {CategoriesXAxis} from './CategoriesXAxis';
import {CategoriesYAxis} from './CategoriesYAxis';
import {ContentCategoryInfo} from './contentCategoriesTypes';
import {CategoriesLollipops} from './CategoriesLollipops';

const width = 960;
const height = 600;
const margin = {top: 40, right: 60, bottom: 130, left: 60};
const innerWidth = width - margin.right - margin.left;
const innerHeight = height - margin.top - margin.bottom;
const translateWidth = margin.left;
const translateHeight = margin.top;

type ChartProps = {
  data: YouTubeChannelData[];
}

export const ContentCategoriesSvg: React.FC<ChartProps> = ({data}) => {
  const categories: ContentCategoryInfo[] = rollups(
    data,
    (value) => value.length,
    (datum) => datum.contentCategory,
  )
    .map(([contentCategory, quantity]) => ({contentCategory, quantity}));

  const xValue = (categoryInfo: ContentCategoryInfo) => categoryInfo.contentCategory;
  const yValue = (categoryInfo: ContentCategoryInfo) => categoryInfo.quantity;
  const maxChannelsForCategory = max(categories, yValue) || 0;

  const xScale = scaleBand()
    .domain(categories.map(xValue))
    .range([0, innerWidth])
    .paddingInner(0.15);

  const yScale = scaleLinear()
    .domain([0, maxChannelsForCategory])
    .range([innerHeight, 0])
    .nice(5);

  return (
    <ResponsiveSvg
      width={width}
      height={height}
      translateWidth={translateWidth}
      translateHeight={translateHeight}
    >
      <CategoriesXAxis
        xScale={xScale}
        innerHeight={innerHeight}
      />
      <CategoriesYAxis
        yScale={yScale}
        innerWidth={innerWidth}
      />
      <CategoriesLollipops
        xScale={xScale}
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        categories={categories}
        innerHeight={innerHeight}
      />
    </ResponsiveSvg>
  );
};
