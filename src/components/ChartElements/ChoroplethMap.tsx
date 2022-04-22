import React from 'react';
import {
  GeoProjection,
  InternMap,
  ScaleSequential,
  geoGraticule,
  geoPath,
} from 'd3';
import {FeatureCollection} from 'geojson';
import {WorldAtlas} from '@utils/commonTypes';

type ChoroplethMapProps<T> = {
  worldAtlas: WorldAtlas,
  projection: GeoProjection,
  data: InternMap<string, T>,
  colorScale: ScaleSequential<string, never>,
  colorValue: (_value: T) => number,
}

export const ChoroplethMap = <T, >({
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
