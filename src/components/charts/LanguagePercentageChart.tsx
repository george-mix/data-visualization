import React from 'react';
import {pie, sum, flatRollup, schemeSet3, arc, scaleOrdinal, PieArcDatum, Arc, ScaleOrdinal} from 'd3';
import {YouTubeChannelData} from '@utils/commonTypes';

interface SubscriberLanguage {
	primaryLanguage: string,
	subscriberQuantity: number,
}

const width = 450;
const height = 450;
const margin = {top: 100, right: 100, bottom: 20, left: 20};
const radius = Math.min(width - margin.left - margin.right, height - margin.top - margin.bottom) / 2;

export const LanguagePercentageChart: React.FC<{
	data: YouTubeChannelData[],
}> = ({data}) => {
	const colors = scaleOrdinal(schemeSet3);

	const languageData: SubscriberLanguage[] = flatRollup(
		data,
		value => sum(value, d => d.subscribers),
		d => d.primaryLanguage,
	)
		.map(language => ({
			primaryLanguage: language[0],
			subscriberQuantity: language[1],
		}));

	const createPie = pie<SubscriberLanguage>()
		.value(d => d.subscriberQuantity)
		.sort(null);

	const createArc = arc<PieArcDatum<SubscriberLanguage>>()
		.innerRadius(radius)
		.outerRadius(100);

	const languagePieArcs = createPie(languageData);

	return (
		<svg viewBox={`0 0 ${width} ${height}`}>
			<g transform={`translate(${radius},${radius})`}>
				{languagePieArcs.map((language, index) => (
					<PieArc<SubscriberLanguage>
						key={language.data.primaryLanguage}
						data={language}
						index={index}
						createArc={createArc}
						colors={colors}
						text={language.data.primaryLanguage}
					/>
				))}
			</g>
		</svg>
	);
};

type ArcProps<T> = {
	data: PieArcDatum<T>,
	index: number,
	createArc: Arc<any, PieArcDatum<T>>,
	colors: ScaleOrdinal<string, string, never>,
	text: string
}

const PieArc = <T, >({data, index, createArc, colors, text}: ArcProps<T>) => (
	<g key={index}>
		<path d={createArc(data) || undefined} fill={colors(index.toString())} />
		<text
			transform={`translate(${createArc.centroid(data)})`}
			textAnchor="middle"
			alignmentBaseline="middle"
			fill="black"
			fontSize="16"
		>
			{text}
		</text>
	</g>
);
