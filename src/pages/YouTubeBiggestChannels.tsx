import React from 'react';
import {useCSV} from '@utils/hooks/useCSV';
import {TopTenYTChannelsChart} from '@components/charts/TopTenYTChannelsChart';
import {ParsedYouTubeCSV, YouTubeCSV} from '@utils/commonTypes';

export const YouTubeBiggestChannels: React.FC = () => {
	const url = import.meta.env.VITE_YOUTUBE_CHANNELS_DATA_SOURCE;
	const data = useCSV<YouTubeCSV>(url);

	if (!data.length) {
		return <pre>Loading...</pre>;
	}

	const parsedData: ParsedYouTubeCSV[] = data.map(d => ({
		channelName: d.Channel,
		contentCategory: d['Content category'],
		country: d.Country,
		primaryLanguage: d['Primary language(s)'],
		subscribers: +d['Subscribers (millions)'],
	}));

	return (
		<>
			YouTube Channels
			<TopTenYTChannelsChart data={parsedData} />
		</>
	);
};

