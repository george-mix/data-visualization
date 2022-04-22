import React from 'react';
import {useWorldAtlas} from '@utils/hooks/useWorldAtlas';
import {
  geoNaturalEarth1,
  group,
  interpolateYlOrRd,
  scaleSequential,
} from 'd3';
import {YouTubeChannelData} from '@utils/commonTypes';
import {ChoroplethMap} from '@components/ChartElements/ChoroplethMap';
const worldAtlasUrl = import.meta.env.VITE_WORLD_ATLAS_JSON_URL_110M;

export const ChannelQuantityChoroplethMap: React.FC<{
  data: YouTubeChannelData[]
}> = ({data}) => {
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

