import React from 'react';
import {
  geoNaturalEarth1,
  group,
  interpolateYlOrRd,
  scaleSequential,
} from 'd3';
import {useWorldAtlas} from '@helpers/hooks/useWorldAtlas';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {ChoroplethMap} from '@components/ChartElements/ChoroplethMap';
const worldAtlasUrl = import.meta.env.VITE_WORLD_ATLAS_JSON_URL_110M;

type ChartProps = {
  data: YouTubeChannelData[];
}

export const ChannelQuantityChoroplethMap: React.FC<ChartProps> = ({data}) => {
  const width = 960;
  const height = 500;
  const worldAtlas = useWorldAtlas(worldAtlasUrl);
  const projection = geoNaturalEarth1();

  if (!worldAtlas) {
    return <pre>Loading...</pre>;
  }

  const countryChannels = group(data, (d) => d.country);

  const maxChannelNumber = [...countryChannels].reduce(
    (maxChannels, [, channels]) => maxChannels > channels.length
      ? maxChannels
      : channels.length,
    0,
  );

  const colorValue = (value: YouTubeChannelData[]) => value.length;
  const colorScale = scaleSequential(interpolateYlOrRd)
    .domain([0, maxChannelNumber]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <ChoroplethMap<YouTubeChannelData[]>
        worldAtlas={worldAtlas}
        projection={projection}
        data={countryChannels}
        colorScale={colorScale}
        colorValue={colorValue}
      />
    </svg>
  );
};

