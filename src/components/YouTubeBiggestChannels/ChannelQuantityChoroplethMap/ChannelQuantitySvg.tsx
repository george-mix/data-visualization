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
const projection = geoNaturalEarth1();

export const ChannelQuantitySvg: React.FC<ChartProps> = ({
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
  const minChannelNumber = [...countryChannels].reduce(
    (minChannels, [, channels]) => minChannels < channels.length
      ? minChannels
      : channels.length,
    0,
  );

  const colorValue = (value: YouTubeChannelData[]) => value.length;
  const colorScale = scaleSequential(colors)
    .domain([minChannelNumber, maxChannelNumber]);

  return (
    <ResponsiveSvg
      width={width}
      height={height}
    >
      <g>
        <WorldChoroplethMap<YouTubeChannelData[]>
          worldAtlas={worldAtlas}
          projection={projection}
          data={countryChannels}
          colorScale={colorScale}
          colorValue={colorValue}
          options={{
            showBackground: false,
          }}
        />
      </g>
      <ColorLegend
        colorRange={colors}
        height={height}
      />
    </ResponsiveSvg>
  );
};
