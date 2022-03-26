import React from 'react';
import {max, scaleBand, scaleLinear} from 'd3';
import {ParsedYouTubeCSV} from '@utils/commonTypes';

export const TopTenYTChannelsChart: React.FC<{
    data: ParsedYouTubeCSV[];
}> = ({data}) => {
	const width = 960;
	const height = 440;
	const margin = {top: 20, right: 80, bottom: 20, left: 250};
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.right - margin.left;

	const topTen: ParsedYouTubeCSV[] = data.slice(0, 10);
	console.log('here', topTen);

	const yValue = (d: ParsedYouTubeCSV) => d.channelName;
	const xValue = (d: ParsedYouTubeCSV) => d.subscribers;
	const maxSubsribers = max(topTen, xValue) || 0;

	const yScale = scaleBand()
		.domain(topTen.map(yValue))
		.range([0, innerHeight])
		.paddingInner(0.15);

	const xScale = scaleLinear()
		.domain([0, maxSubsribers])
		.range([0, innerWidth]);

	return (
		<svg viewBox={`0 0 ${width} ${height}`}>
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
					<g key={tick} transform={`translate(0,${yScale(tick) || 0 + (yScale.bandwidth() / 2)})`}>
						<text
							dy={'0.32em'}
							style={{textAnchor: 'end'}}>
							{tick}
						</text>
					</g>
				))}
				{topTen.map((d: ParsedYouTubeCSV) => <rect
					x={0}
					y={yScale(d.channelName)}
					width={xScale(d.subscribers)}
					height={yScale.bandwidth()}
					key={d.channelName}
				/>)}
			</g>
		</svg>
	);
};
