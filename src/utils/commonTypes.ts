import React from 'react';
import {MultiLineString, Feature, FeatureCollection, GeoJsonProperties, Geometry} from 'geojson';

// interfaces
export interface AppRoute {
    name: string;
    path: string;
    element: React.FC;
}

export interface YouTubeParsedCSVData {
	Channel: string;
    'Content category': string;
    Country: string;
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

export interface WorldAtlas {
	countries: Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>;
	interiors: MultiLineString;
}
