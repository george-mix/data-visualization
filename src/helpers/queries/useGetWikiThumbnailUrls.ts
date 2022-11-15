import {useQuery} from '@tanstack/react-query';
import {getThumbnailUrlList} from '@helpers/services/mediawiki';
import {PageThumbnail} from '@helpers/common/interfaces';

type UseGetWikiThumbnailUrls = (
  _pageTitles: string[],
  _keys: string[]
) => [PageThumbnail[], boolean, boolean]

export const useGetWikiThumbnailUrls: UseGetWikiThumbnailUrls = (pageTitles, key) => {
  const {data, isLoading, isError} = useQuery({
    queryKey: key,
    queryFn: () => getThumbnailUrlList(pageTitles),
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60 * 12,
    enabled: !!pageTitles.length,
  });

  return [data || [], isLoading, isError];
};
