import React from 'react';

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
