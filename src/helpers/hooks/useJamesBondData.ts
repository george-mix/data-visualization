import {useQuery} from '@tanstack/react-query';
import {getParsedGist} from '@helpers/services/githubGists';
import {JamesBondFilmData, JamesBondParsedCSVData} from '@helpers/common/interfaces';

const path = import.meta.env.VITE_JAMES_BOND_FILMS_DATA_PATH;

export const useJamesBondData = (): [JamesBondFilmData[], boolean, boolean] => {
  const {data, isLoading, isError} = useQuery(
    ['jamesBondData'],
    () => getParsedGist<JamesBondParsedCSVData>(path),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 60 * 12,
      select(data) {
        const parsedFilmData: JamesBondFilmData[] = data.map((film) => ({
          director: film.Director,
          title: film.Title,
          year: +film.Year,
          bondActor: film['Bond actor'],
          boxOfficeActual: +film['Box office (Actual $)'],
          boxOfficeAdjusted: +film['Box office (Adjusted $2005)'],
          budgetActual: +film['Budget (Actual $)'],
          budgetAdjusted: +film['Budget (Adjusted $2005)'],
        }));
        return parsedFilmData;
      },
    },
  );

  return [data || [], isLoading, isError];
};
