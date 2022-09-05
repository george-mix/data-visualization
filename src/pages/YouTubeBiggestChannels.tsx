import React from 'react';
import {TopTenChannelsChart} from '@components/YouTubeBiggestChannels/TopTenChannelsChart';
import {LanguagePercentageChart} from '@components/YouTubeBiggestChannels/LanguagePercentageChart';
import {ChannelQuantityChoroplethMap} from '@components/YouTubeBiggestChannels/ChannelQuantityChoroplethMap';
import {useYouTubeData} from '@helpers/hooks/useYouTubeData';

const YouTubeBiggestChannels: React.FC = () => {
  const [parsedYouTubeData, isLoading] = useYouTubeData();

  if (isLoading) {
    return <pre>Loading...</pre>;
  }

  return (
    <>
      YouTube Channels
      <TopTenChannelsChart data={parsedYouTubeData} />
      <LanguagePercentageChart data={parsedYouTubeData} />
      <ChannelQuantityChoroplethMap data={parsedYouTubeData} />
    </>
  );
};

export default YouTubeBiggestChannels;
