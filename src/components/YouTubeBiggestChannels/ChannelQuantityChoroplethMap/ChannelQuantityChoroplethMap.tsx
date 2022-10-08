import React from 'react';
import {
  geoNaturalEarth1,
  group,
  scaleSequential,
} from 'd3';
import {WorldAtlas, YouTubeChannelData} from '@helpers/common/interfaces';
import {WorldChoroplethMap} from '@components/ChartElements/WorldChoroplethMap';
import {useColorScheme} from '@helpers/hooks/useColorScheme';
import {ResponsiveSvg} from '@components/ChartElements/ResponsiveSvg';
import {ColorLegend} from './ColorLegend';

type ChartProps = {
  data: YouTubeChannelData[];
  worldAtlas: WorldAtlas;
}

const width = 960;
const height = 500;
const translateWidth = 0;
const translateHeight = 0;
const projection = geoNaturalEarth1();

export const ChannelQuantityChoroplethMap: React.FC<ChartProps> = ({
  data,
  worldAtlas,
}) => {
  const colors = useColorScheme<string[]>('interpolationGreen');

  const countryChannels = group(data, (d) => d.country);

  const maxChannelNumber = [...countryChannels].reduce(
    (maxChannels, [, channels]) => maxChannels > channels.length
      ? maxChannels
      : channels.length,
    0,
  );
  const leastChannelNumber = [...countryChannels].reduce(
    (leastChannels, [, channels]) => leastChannels < channels.length
      ? leastChannels
      : channels.length,
    0,
  );

  const colorValue = (value: YouTubeChannelData[]) => value.length;
  const colorScale = scaleSequential(colors)
    .domain([leastChannelNumber, maxChannelNumber]);

  return (
    <ResponsiveSvg
      width={width}
      height={height}
      translateWidth={translateWidth}
      translateHeight={translateHeight}
    >
      <WorldChoroplethMap<YouTubeChannelData[]>
        worldAtlas={worldAtlas}
        projection={projection}
        data={countryChannels}
        colorScale={colorScale}
        colorValue={colorValue}
      />
      <ColorLegend
        colorRange={colors}
        width={width}
        height={height}
      />
    </ResponsiveSvg>
  );
};
