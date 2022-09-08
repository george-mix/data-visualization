import React from 'react';
import {max, scaleBand, scaleLinear} from 'd3';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {useTheme} from '@mui/system';

const width = 960;
const height = 700;
const margin = {top: 20, right: 40, bottom: 80, left: 40};

type ChartProps = {
  data: YouTubeChannelData[];
}

export const TopTenChannelsChart: React.FC<ChartProps> = ({data}) => {
  const theme = useTheme();

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

  const findTickYCoordinate = (tick: string) => {
    const yCoordinate = yScale(tick);
    return yCoordinate === undefined ? 0 : yCoordinate + (yScale.bandwidth() / 2);
  };

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map((tick: number) => (
          <g
            key={tick}
            transform={`translate(${xScale(tick)},0)`}
          >
            <line
              y2={innerHeight}
              stroke={theme.palette.secondary.light}
            />
            <text
              dy={'1em'}
              y={innerHeight}
              style={{textAnchor: 'middle'}}
              fill={theme.palette.text.primary}
            >
              {tick}
            </text>
          </g>
        ))}
        {topTenChannels.map((d: YouTubeChannelData) => <rect
          key={d.channelName}
          x={0}
          y={yScale(d.channelName)}
          width={xScale(d.subscribers)}
          height={yScale.bandwidth()}
          fill={theme.palette.primary.main}
        />)}
        <text
          x={innerWidth / 2}
          y={innerHeight + 60}
          textAnchor="middle"
          fontSize="2em"
          fill={theme.palette.text.primary}
        >
          Subscribers (mlns)
        </text>
        {yScale.domain().map((tick: string) => (
          <g
            key={tick}
            transform={`translate(0,${findTickYCoordinate(tick)})`}
          >
            <text
              dy={'0.32em'}
              dx={'0.64em'}
              style={{textAnchor: 'start'}}
              fill={theme.palette.background.default}
            >
              {tick}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};
