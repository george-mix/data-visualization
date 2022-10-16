import React from 'react';
import {useWorldAtlas} from '@helpers/hooks/useWorldAtlas';
import {useYouTubeData} from '@helpers/hooks/useYouTubeData';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {ChannelQuantitySvg} from './ChannelQuantitySvg';

export const ChannelQuantityChoroplethMap: React.FC = () => {
  const [youtubeCahnnelsData, isLoading, isError] = useYouTubeData();
  const [worldAtlas, isAtlasLoading, isAtlasError] = useWorldAtlas();

  return (
    <SvgStatusProvider
      isLoading={isLoading || isAtlasLoading}
      isError={isError || isAtlasError || !worldAtlas}
    >
      {
        worldAtlas && <ChannelQuantitySvg
          data={youtubeCahnnelsData}
          worldAtlas={worldAtlas}
        />
      }
    </SvgStatusProvider>
  );
};
