import React from 'react';
import {extent, line, scaleLinear, curveCatmullRom as testcurve} from 'd3';
import {JamesBondFilmData} from '@common/interfaces';

const width = 960;
const height = 500;
const margin = {top: 20, right: 30, bottom: 65, left: 90};
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.right - margin.left;

type ChartProps = {
  data: JamesBondFilmData[];
}

export const PopularityTimeline: React.FC<ChartProps> = ({data}) => {
  console.log(innerHeight, innerWidth);

  const xValue = (d: JamesBondFilmData): number => d.year;
  const xAxisLabel = 'Years';

  const yValue = (d: JamesBondFilmData): number => d.boxOfficeAdjusted - d.budgetAdjusted;
  const yAxisLabel = 'Box Office - Budjet ($mln)';

  const xScale = scaleLinear()
    .domain(extent(data, xValue) as [number, number])
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue) as [number, number])
    .range([innerHeight, 0]);

  const xTickOffset = 7;
  const yTickOffset = 7;
  const circleRadius = 3;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map((tickValue) => (
          <g
            key={tickValue}
            transform={`translate(${xScale(tickValue)},0)`}
          >
            <line y2={innerHeight} />
            <text
              style={{textAnchor: 'middle'}}
              dy=".71em"
              y={innerHeight + xTickOffset}>
              {tickValue}
            </text>
          </g>
        ))}
        <text
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight
            / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        {yScale.ticks().map((tickValue) => (
          <g
            key={tickValue}
            transform={`translate(0,${yScale(tickValue)})`}
          >
            <line x2={innerWidth} />
            <text
              style={{textAnchor: 'end'}}
              x={-yTickOffset}
              dy=".32em"
            >
              {tickValue}
            </text>
          </g>
        ))}
        <text
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <g>
          <path
            fill="none"
            stroke="black"
            d={line<JamesBondFilmData>()
              .x((d) => xScale(xValue(d)))
              .y((d) => yScale(yValue(d)))
              .curve(testcurve)(data) ?? ''}
          />
          {
            data.map((d, i) => (
              <circle key={i} cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius}>
                <title>{xValue(d)}</title>
              </circle>
            ))
          }
        </g>
      </g>
    </svg>
  );
};
