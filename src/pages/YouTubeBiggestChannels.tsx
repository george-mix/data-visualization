import React from 'react';
import {max, scaleBand, scaleLinear} from 'd3';
import {useCSV} from '@utils/hooks/useCSV';

const width = 960;
const height = 500;

interface YouTubeCSV {
	'Subscribers (millions)': string;
	Channel: string;
	Subs: number;
}

export const YouTubeBiggestChannels: React.FC = () => {
	const url = import.meta.env.VITE_YOUTUBE_CHANNELS_DATA_SOURCE;
	const data = useCSV<YouTubeCSV>(url);

	if (!data) {
		return <pre>Loading...</pre>;
	}

	const topTen = data.slice(0, 10).map(d => {
		d.Subs = +d['Subscribers (millions)'];
		return d;
	});
	console.log('here', topTen);

	const yValue = (d: any) => d.Channel;
	const xValue = (d: any) => d.Subs;

	const yScale = scaleBand()
		.domain(topTen.map(yValue))
		.range([0, height]);

	const xScale = scaleLinear()
		.domain([0, max(topTen, xValue)])
		.range([0, width]);

	console.log(xScale.ticks());

	return (
		<>
			YouTube Channels
			<svg width={width} height={height}>
				{topTen.map((d: YouTubeCSV) => <rect
					x={0}
					y={yScale(d.Channel)}
					width={xScale(d.Subs)}
					height={yScale.bandwidth()}
					key={d.Channel}
				/>)}
			</svg>
		</>
	);
};

