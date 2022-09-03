import React from 'react';
import {useParseRemoteCSV} from '@helpers/hooks/useParseRemoteCSV';
import {TopTenChannelsChart} from '@components/YouTubeBiggestChannels/TopTenChannelsChart';
import {LanguagePercentageChart} from '@components/YouTubeBiggestChannels/LanguagePercentageChart';
import {ChannelQuantityChoroplethMap} from '@components/YouTubeBiggestChannels/ChannelQuantityChoroplethMap';
import {YouTubeChannelData, YouTubeParsedCSVData} from '@helpers/common/interfaces';

export const YouTubeBiggestChannels: React.FC = () => {
  const url = import.meta.env.VITE_YOUTUBE_CHANNELS_DATA_SOURCE;
  const youtubeData = useParseRemoteCSV<YouTubeParsedCSVData>(url);

  if (!youtubeData.length) {
    return <pre>Loading...</pre>;
  }

  const parsedYouTubeData: YouTubeChannelData[] = youtubeData.map((d) => ({
    channelName: d.Channel,
    contentCategory: d['Content category'],
    country: d.Country,
    primaryLanguage: d['Primary language(s)'],
    subscribers: Math.round(+d['Subscribers (millions)']),
  }));

  return (
    <>
      YouTube Channels
      <TopTenChannelsChart data={parsedYouTubeData} />
      <LanguagePercentageChart data={parsedYouTubeData} />
      <ChannelQuantityChoroplethMap data={parsedYouTubeData} />
    </>
  );
};

