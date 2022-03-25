import React from 'react';
import {max, scaleBand, scaleLinear} from 'd3';
import {useCSV} from '@utils/hooks/useCSV';

const width = 960;
const height = 500;
const margin = {top: 20, right: 20, bottom: 20, left: 250};

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

	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.right - margin.left;

	const yScale = scaleBand()
		.domain(topTen.map(yValue))
		.range([0, innerHeight])
		.paddingInner(0.15);

	const xScale = scaleLinear()
		.domain([0, max(topTen, xValue)])
		.range([0, innerWidth]);

	const checkYScaleTick = (tick: string) => {
		const result = yScale(tick);
		return result ? result : 0;
	};

	return (
		<>
			YouTube Channels
			<svg width={width} height={height}>
				<g transform={`translate(${margin.left},${margin.top})`}>
					{xScale.ticks().map((tick: number) => (
						<g key={tick} transform={`translate(${xScale(tick)},0)`}>
							<line y2={innerHeight} stroke={'black'} />
							<text
								dy={'0.71em'}
								y={innerHeight} style={{textAnchor: 'middle'}}
							>
								{tick}
							</text>
						</g>
					))}
					{yScale.domain().map((tick: string) => (
						<g key={tick} transform={`translate(0,${checkYScaleTick(tick) + (yScale.bandwidth() / 2)})`}>
							<text
								dy={'0.32em'}
								style={{textAnchor: 'end'}}>
								{tick}
							</text>
						</g>
					))}
					{topTen.map((d: YouTubeCSV) => <rect
						x={0}
						y={yScale(d.Channel)}
						width={xScale(d.Subs)}
						height={yScale.bandwidth()}
						key={d.Channel}
					/>)}
				</g>
			</svg>
		</>
	);
};

