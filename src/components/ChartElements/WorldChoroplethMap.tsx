import React from 'react';
import {
  GeoProjection,
  InternMap,
  ScaleSequential,
  geoGraticule,
  geoPath,
} from 'd3';
import {FeatureCollection} from 'geojson';
import {WorldAtlas} from '@helpers/common/interfaces';
import {Borders} from './Geo/Borders';
import {Country} from './Geo/Country';
import {Graticule} from './Geo/Graticule';
import {MapBackground} from './Geo/MapBackground';

type WorldChoroplethMapProps<T> = {
  worldAtlas: WorldAtlas,
  projection: GeoProjection,
  data: InternMap<string, T>,
  colorScale: ScaleSequential<string, never>,
  colorValue: (_value: T) => any,
}

export const WorldChoroplethMap = <T, >({
  worldAtlas: {countries, interiors},
  projection,
  data,
  colorScale,
  colorValue,
}: WorldChoroplethMapProps<T>) => {
  const path = geoPath(projection);
  const graticuleGenerator = geoGraticule();
  const graticule = graticuleGenerator();
  const worldCountries = countries as FeatureCollection;

  return (
    <g>
      <MapBackground path={path} />
      <Graticule path={path} pathArgument={graticule} />
      {worldCountries.features.map((feature) => {
        const country = data.get(feature?.properties?.name);

        return (
          <Country
            key={feature?.properties?.name}
            path={path}
            pathArgument={feature}
            pathProps={country && {
              fill: colorScale(colorValue(country)),
            }}
          />
        );
      })}
      <Borders path={path} pathArgument={interiors} />
    </g>
  );
};
