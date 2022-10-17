import React from 'react';
import {max, scaleBand, scaleLinear} from 'd3';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {ResponsiveSvg} from '@components/ChartElements/ResponsiveSvg';
import {TopTenXAxis} from './TopTenXAxis';
import {TopTenYAxis} from './TopTenYAxis';
import {TopTenMarks} from './TopTenMarks';

type ChartProps = {
  data: YouTubeChannelData[];
}

const width = 960;
const height = 560;
const margin = {top: 24, right: 24, bottom: 96, left: 24};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.right - margin.left;

export const TopTenChannelsSvg: React.FC<ChartProps> = ({data}) => {
  const topTenChannels: YouTubeChannelData[] = data.slice(0, 10);

  const yValue = (channel: YouTubeChannelData) => channel.channelName;
  const xValue = (channel: YouTubeChannelData) => channel.subscribers;
  const maxSubsribers = max(topTenChannels, xValue) || 0;

  const yScale = scaleBand()
    .domain(topTenChannels.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.2);

  const xScale = scaleLinear()
    .domain([0, maxSubsribers])
    .range([0, innerWidth]);

  return (
    <ResponsiveSvg
      width={width}
      height={height}
      translateWidth={margin.left}
      translateHeight={margin.top}
    >
      <TopTenXAxis xScale={xScale} width={innerWidth} height={innerHeight} />
      <TopTenMarks topTenChannels={topTenChannels} xScale={xScale} yScale={yScale} />
      <TopTenYAxis yScale={yScale} />
    </ResponsiveSvg>
  );
};
