import React from 'react';
import {useParseRemoteCSV} from '@utils/hooks/useParseRemoteCSV';
import {TopTenChannelsChart} from '@visualizations/YouTubeBiggestChannels/TopTenChannelsChart';
import {LanguagePercentageChart} from '@visualizations/YouTubeBiggestChannels/LanguagePercentageChart';
import {ChannelQuantityChoroplethMap} from '@visualizations/YouTubeBiggestChannels/ChannelQuantityChoroplethMap';
import {YouTubeChannelData, YouTubeParsedCSVData} from '@utils/commonTypes';

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

