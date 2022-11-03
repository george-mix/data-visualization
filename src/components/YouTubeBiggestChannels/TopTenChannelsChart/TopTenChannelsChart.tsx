import React from 'react';
import {useYouTubeData} from '@helpers/queries/useYouTubeData';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {TopTenChannelsSvg} from './TopTenChannelsSvg';

export const TopTenChannelsChart: React.FC = () => {
  const [youtubeCahnnelsData, isLoading, isError] = useYouTubeData();

  return (
    <SvgStatusProvider isLoading={isLoading} isError={isError}>
      <TopTenChannelsSvg data={youtubeCahnnelsData} />
    </SvgStatusProvider>
  );
};
