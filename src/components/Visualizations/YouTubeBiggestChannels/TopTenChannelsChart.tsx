import React from 'react';
import {max, scaleBand, scaleLinear} from 'd3';
import {YouTubeChannelData} from '@utils/commonTypes';

export const TopTenChannelsChart: React.FC<{
  data: YouTubeChannelData[];
}> = ({data}) => {
  const width = 960;
  const height = 440;
  const margin = {top: 20, right: 80, bottom: 20, left: 250};
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.right - margin.left;

  const topTenChannels: YouTubeChannelData[] = data.slice(0, 10);

  const yValue = (d: YouTubeChannelData) => d.channelName;
  const xValue = (d: YouTubeChannelData) => d.subscribers;
  const maxSubsribers = max(topTenChannels, xValue) || 0;

  const yScale = scaleBand()
    .domain(topTenChannels.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, maxSubsribers])
    .range([0, innerWidth]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map((tick: number) => (
          <g key={tick} transform={`translate(${xScale(tick)},0)`}>
            <line y2={innerHeight} stroke={'black'} />
            <text
              dy={'0.71em'}
              y={innerHeight} style={{textAnchor: 'middle'}}
            >
              {tick}
            </text>
          </g>
        ))}
        {yScale.domain().map((tick: string) => (
          <g key={tick} transform={`translate(0,${yScale(tick) || 0 + (yScale.bandwidth() / 2)})`}>
            <text
              dy={'0.32em'}
              style={{textAnchor: 'end'}}>
              {tick}
            </text>
          </g>
        ))}
        {topTenChannels.map((d: YouTubeChannelData) => <rect
          x={0}
          y={yScale(d.channelName)}
          width={xScale(d.subscribers)}
          height={yScale.bandwidth()}
          key={d.channelName}
        />)}
      </g>
    </svg>
  );
};
