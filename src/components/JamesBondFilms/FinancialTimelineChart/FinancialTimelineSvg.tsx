import React from 'react';
import {extent, max, scaleLinear} from 'd3';
import {JamesBondFilmData} from '@helpers/common/interfaces';
import {ResponsiveSvg} from '@components/ChartElements/ResponsiveSvg';
import {TimelineXAxis} from './TimelineXAxis';
import {TimelineYAxis} from './TimelineYAxis';
import {FinancialTimelineMarks} from './FinancialTimelineMarks';

type ChartProps = {
  films: JamesBondFilmData[];
  yValue: (_film: JamesBondFilmData) => number;
}

const width = 960;
const height = 550;
const margin = {top: 20, right: 30, bottom: 50, left: 90};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.right - margin.left;

export const FinancialTimelineSvg: React.FC<ChartProps> = ({films, yValue}) => {
  const xValue = (film: JamesBondFilmData): number => film.year;

  const years = extent(films, xValue) as [number, number];
  const maxMoneyValue = max(films, yValue) || 0;

  const xScale = scaleLinear()
    .domain(years)
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain([0, maxMoneyValue])
    .range([innerHeight, 0])
    .nice();

  return (
    <ResponsiveSvg
      width={width}
      height={height}
      translateWidth={margin.left}
      translateHeight={margin.top}
    >
      <TimelineXAxis xScale={xScale} innerHeight={innerHeight}/>
      <TimelineYAxis
        yScale={yScale}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
      />
      <FinancialTimelineMarks
        xScale={xScale}
        xValue={xValue}
        yScale={yScale}
        yValue={yValue}
        films={films}
      />
    </ResponsiveSvg>
  );
};
