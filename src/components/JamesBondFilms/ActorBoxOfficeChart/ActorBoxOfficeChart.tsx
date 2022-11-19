import React from 'react';
import {useJamesBondData} from '@helpers/queries/useJamesBondData';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {useGetWikiThumbnailUrls} from '@helpers/queries/useGetWikiThumbnailUrls';
import {ActorBoxOfficeSvg} from './ActorBoxOfficeSvg';
import {ActorChartControls} from './ActorChartControls';
import {ActorChartContextProvider} from './ActorChartContextProvider';

export const ActorBoxOfficeChart: React.FC = () => {
  const [films, isLoading, isError] = useJamesBondData();
  const actors = new Set(films.map((film) => film.bondActor));

  const [thumbnails, isThumbnailsLoading, isThumbnailsError] = useGetWikiThumbnailUrls(
    [...actors],
    ['jamesBondData', 'actorThumbnailUrls'],
  );

  return (
    <SvgStatusProvider
      isLoading={isLoading || isThumbnailsLoading}
      isError={isError || isThumbnailsError}
    >
      <ActorChartContextProvider>
        <ActorBoxOfficeSvg films={films} thumbnails={thumbnails} />
        <ActorChartControls />
      </ActorChartContextProvider>
    </SvgStatusProvider>
  );
};
