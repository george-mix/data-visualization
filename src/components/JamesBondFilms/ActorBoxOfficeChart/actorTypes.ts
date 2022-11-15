import {Arc, PieArcDatum, ScaleOrdinal} from 'd3';
import {JamesBondFilmData, PageThumbnail} from '@helpers/common/interfaces';
import {KeysOfType} from '@helpers/common/types';

export interface Actor {
  name: string;
}

export interface ActorFilmQuantity extends Actor{
  filmQuantity: number;
}

export interface ActorInfo extends Actor{
  totalBoxOffice: number;
  averageBoxOffice: number;
  thumbnail: string | undefined;
  filmQuantity: number;
}

export type BoxOfficeSortingKey = KeysOfType<ActorInfo, number>;

export type BoxOfficeType = 'total' | 'average';

export type ActorArcsProps = {
  actorArcs: PieArcDatum<ActorInfo>[];
  createArc: Arc<any, PieArcDatum<ActorInfo>>;
  colors: ScaleOrdinal<string, string, never>;
};

export type ActorChartProps = {
  films: JamesBondFilmData[];
  thumbnails: PageThumbnail[];
};
