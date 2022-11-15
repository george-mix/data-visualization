import {useMemo} from 'react';
import {flatRollup, group, sum} from 'd3';
import {JamesBondFilmData, PageThumbnail} from '@helpers/common/interfaces';
import {ActorChartProps, ActorFilmQuantity, ActorInfo, BoxOfficeSortingKey, BoxOfficeType} from './actorTypes';

const findTotalBoxOffice = (films: JamesBondFilmData[]) => {
  const actors = flatRollup(
    films,
    (value) => sum(value, (film) => film.boxOfficeAdjusted),
    (film) => film.bondActor,
  )
    .map((actor) => ({
      name: actor[0],
      totalBoxOffice: actor[1],
    }));
  return actors;
};

const findFilmQuantityForActors = (films: JamesBondFilmData[]) => {
  const actorFilms = group(films, (film) => film.bondActor);
  const actorFilmQuantity = [...actorFilms].map((actor) => {
    const filmQuantity = actor[1].length;

    return {
      name: actor[0],
      filmQuantity,
    };
  });
  return actorFilmQuantity;
};

const findFilmQuantityForActor = (actorFilmQuantity: ActorFilmQuantity[], actorName: string) => {
  const filmQuantity = actorFilmQuantity.find((actor) => actor.name === actorName)?.filmQuantity;

  return filmQuantity || 0;
};

const findThumbnailForActor = (thumbnails: PageThumbnail[], actorName: string) =>
  thumbnails.find((thumbnail) => thumbnail.pageTitle === actorName);

const findAverageBoxOfficeForActor = (
  filmQuantity: number,
  totalBoxOffice: number,
) => {
  const averageBoxOffice = totalBoxOffice / (filmQuantity || 1);
  return averageBoxOffice;
};

type UseActorProps = ActorChartProps & {
  boxOfficeType: BoxOfficeType;
}

export const useActorInfo = ({films, thumbnails, boxOfficeType}: UseActorProps) => {
  const sortingKey: BoxOfficeSortingKey = boxOfficeType === 'total'
    ? 'totalBoxOffice'
    : 'averageBoxOffice';

  const actors: ActorInfo[] = useMemo(() => {
    const actorsWithBoxOffice = findTotalBoxOffice(films);
    const actorFilmQuantity = findFilmQuantityForActors(films);

    const actorInfo = actorsWithBoxOffice.map((actor) => {
      const thumbnail = findThumbnailForActor(thumbnails, actor.name)?.thumbnailUrl;
      const filmQuantity = findFilmQuantityForActor(actorFilmQuantity, actor.name);
      const averageBoxOffice = findAverageBoxOfficeForActor(filmQuantity, actor.totalBoxOffice);

      return {...actor, thumbnail, averageBoxOffice, filmQuantity};
    });
    return actorInfo;
  }, []);

  return {actors, sortingKey};
};
