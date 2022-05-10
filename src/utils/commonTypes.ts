import React from 'react';
import {
  Feature,
  FeatureCollection,
  GeoJsonProperties,
  Geometry,
  MultiLineString,
} from 'geojson';

// types
export type KeysOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V? P: never]: any
}

// interfaces
export interface AppRoute {
  name: string;
  path: string;
  element: React.FC;
}

export interface WorldAtlas {
  countries: Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>;
  interiors: MultiLineString;
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
