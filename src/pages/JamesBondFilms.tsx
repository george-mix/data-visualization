import React from 'react';
import {useParseRemoteCSV} from '@utils/hooks/useParseRemoteCSV';
import {JamesBondFilmData, JamesBondParsedCSVData} from '@utils/commonTypes';
import {BoxOfficeDonutChart} from '@components/Visualizations/JamesBondFilms/BoxOfficeDonutChart';

export const JamesBondFilms: React.FC = () => {
  const url = import.meta.env.VITE_JAMES_BOND_FILMS_DATA_SOURCE;
  const filmData = useParseRemoteCSV<JamesBondParsedCSVData>(url);

  if (!filmData.length) {
    return <pre>Loading...</pre>;
  }

  const parsedFilmData: JamesBondFilmData[] = filmData.map((film) => ({
    director: film.Director,
    title: film.Title,
    year: +film.Year,
    bondActor: film['Bond actor'],
    boxOfficeActual: +film['Box office (Actual $)'],
    boxOfficeAdjusted: +film['Box office (Adjusted $2005)'],
    budgetActual: +film['Budget (Actual $)'],
    budgetAdjusted: +film['Budget (Adjusted $2005)'],
  }));
  console.log(parsedFilmData);

  return (
    <>
      James bond Films
      <BoxOfficeDonutChart data={parsedFilmData}/>
    </>
  );
};

