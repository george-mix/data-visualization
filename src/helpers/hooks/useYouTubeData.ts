import {useQuery} from '@tanstack/react-query';
import {getParsedGist} from '@helpers/services/githubGists';
import {YouTubeChannelData, YouTubeParsedCSVData} from '@helpers/common/interfaces';

const path = import.meta.env.VITE_YOUTUBE_CHANNELS_DATA_PATH;

export const useYouTubeData = (): [YouTubeChannelData[], boolean, boolean] => {
  const {data, isLoading, isError} = useQuery(
    ['youtubeData'],
    () => getParsedGist<YouTubeParsedCSVData>(path),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 60 * 12,
      select(data) {
        const parsedData: YouTubeChannelData[] = data.map((d) => ({
          channelName: d.Channel,
          contentCategory: d['Content category'],
          country: d.Country,
          primaryLanguage: d['Primary language(s)'],
          subscribers: Math.round(+d['Subscribers (millions)']),
        }));
        return parsedData;
      },
    },
  );

  return [data || [], isLoading, isError];
};
