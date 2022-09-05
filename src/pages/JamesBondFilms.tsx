import React from 'react';
import {BoxOfficeDonutChart} from '@components/JamesBondFilms/BoxOfficeDonutChart';
import {PopularityTimeline} from '@components/JamesBondFilms/PopularityTimeline';
import {useJamesBondData} from '@helpers/hooks/useJamesBondData';

const JamesBondFilms: React.FC = () => {
  const [parsedFilmData, isLoading] = useJamesBondData();

  if (isLoading) {
    return <pre>Loading...</pre>;
  }

  return (
    <>
      James bond Films
      <BoxOfficeDonutChart data={parsedFilmData}/>
      <PopularityTimeline data={parsedFilmData}/>
    </>
  );
};

export default JamesBondFilms;
