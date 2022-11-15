import {
  Feature,
  FeatureCollection,
  GeoJsonProperties,
  Geometry,
  MultiLineString,
} from 'geojson';
import {MuiIcon} from './types';

export interface AppRoute {
  title: string;
  path: string;
  icon: MuiIcon;
}

export interface ArticleRoute extends AppRoute {
  teaser: string;
  largeImage: string;
  tinyImage: string;
  imageAlt: string;
}

export interface WorldAtlas {
  countries: Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>;
  interiors: MultiLineString;
}

export interface SocialMedia {
  name: string;
  link: string;
  icon: MuiIcon;
}

export interface ProjectGoal {
  title: string;
  description: string;
}

export interface AppPalette {
  text: string;
  background: string;
  neutral: string;
  primary: string;
  secondary: string;
  info: string;
  infoLight: string;
  success: string;
  warning: string;
  error: string;
  accentOne: string;
  accentTwo: string;
  accentThree: string;
}

export interface ColorSchemes {
  schemeOne: string[];
  interpolationGreen: string[];
  svgChartPalette: AppPalette;
}

// article data interfaces
export interface YouTubeParsedCSVData {
  Channel: string;
  Country: string;
  'Content category': string;
  'Primary language(s)': string;
  'Subscribers (millions)': string;
}

export interface YouTubeChannelData {
  channelName: string;
  contentCategory: string;
  country: string;
  primaryLanguage: string;
  subscribers: number;
}

export interface JamesBondParsedCSVData {
  Director: string,
  Title: string,
  Year: string,
  'Bond actor': string,
  'Box office (Actual $)': string,
  'Box office (Adjusted $2005)': string,
  'Budget (Actual $)': string,
  'Budget (Adjusted $2005)': string,
}

export interface JamesBondFilmData {
  director: string,
  title: string,
  year: number,
  bondActor: string,
  boxOfficeActual: number,
  boxOfficeAdjusted: number,
  budgetActual: number,
  budgetAdjusted: number,
}

// wiki interfaces
export interface WikiThumbnail {
  source: string;
  width: number;
  height: number;
}

export interface WikiPageInfo {
  ns: number;
  title: string;
  missing?: boolean;
  pageid?: number;
  thumbnail?: WikiThumbnail;
}

export interface WikiQuery {
  batchcomplete: boolean;
  query: {
    pages: WikiPageInfo[];
  };
}

export interface PageThumbnail {
  pageTitle: string;
  thumbnailUrl: string | undefined
}
