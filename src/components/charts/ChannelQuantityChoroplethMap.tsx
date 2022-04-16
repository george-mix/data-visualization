import React from 'react';
import {useWorldAtlas} from '@utils/hooks/useWorldAtlas';
import {WorldAtlas, YouTubeChannelData} from '@utils/commonTypes';
import {GeoProjection, group, interpolateYlOrRd, scaleSequential} from 'd3';
import {geoNaturalEarth1, geoPath, geoGraticule, InternMap, ScaleSequential} from 'd3';
import {FeatureCollection} from 'geojson';
const worldAtlasUrl = import.meta.env.VITE_WORLD_ATLAS_JSON_URL_110M;

export const ChannelQuantityChoroplethMap: React.FC<{
    data: YouTubeChannelData[]
}> = ({data}) => {
	const width = 960;
	const height = 500;
	const worldAtlas = useWorldAtlas(worldAtlasUrl);
	const projection = geoNaturalEarth1();

	if (!worldAtlas) {
		return <pre>Loading...</pre>;
	}

	const countryChannels = group(data, (d) => d.country);

	const maxChannelNumber = [...countryChannels].reduce((maxChannels, [, channels]) => maxChannels > channels.length ? maxChannels : channels.length, 0);

	const colorValue = (value: YouTubeChannelData[]) => value.length;
	const colorScale = scaleSequential(interpolateYlOrRd)
		.domain([0, maxChannelNumber]);

	return (
		<svg viewBox={`0 0 ${width} ${height}`}>
			<ChoroplethMap<YouTubeChannelData[]>
				worldAtlas={worldAtlas}
				projection={projection}
				data={countryChannels}
				colorScale={colorScale}
				colorValue={colorValue}
			/>
		</svg>
	);
};

type ChoroplethMapProps<T> = {
	worldAtlas: WorldAtlas,
	projection: GeoProjection,
	data: InternMap<string, T>,
	colorScale: ScaleSequential<string, never>,
    colorValue: (_value: T) => number,
}

const ChoroplethMap = <T, >({
	worldAtlas: {countries, interiors},
	projection,
	data,
	colorScale,
	colorValue,
}: ChoroplethMapProps<T>) => {
	const path = geoPath(projection);
	const graticule = geoGraticule();
	const test = countries as FeatureCollection;

	return (
		<g>
			<path fill="#fbfbfb" d={path({type: 'Sphere'}) ?? undefined} />
			<path
				fill="none"
				stroke="#ececec"
				d={path(graticule()) ?? undefined}
			/>
			{test.features.map((feature) => {
				const country = data.get(feature?.properties?.name);

				return (
					<path
						key={feature?.properties?.name}
						fill={country ? colorScale(colorValue(country)) : 'gray'}
						d={path(feature) ?? undefined}
					/>
				);
			})}
			<path
				fill="none"
				stroke="#d9dfe0"
				d={path(interiors) ?? undefined}
			/>
		</g>
	);
};
