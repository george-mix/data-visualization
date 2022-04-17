import {useEffect, useState} from 'react';
import {json} from 'd3';
import {feature, mesh} from 'topojson';
import {GeometryObject, Topology} from 'topojson-specification';
import {WorldAtlas} from '@utils/commonTypes';

export const useWorldAtlas = (jsonUrl: string) => {
  const [data, setData] = useState<WorldAtlas | null>(null);

  useEffect(() => {
    json<Topology>(jsonUrl)
      .then((topology) => {
        if (topology) {
          const {countries} = topology.objects;
          setData({
            countries: feature(topology, countries),
            interiors: mesh(
              topology,
              countries as GeometryObject,
              (a, b) => a !== b,
            ),
          });
        }
      })
      .catch((error) => {
        console.warn(error.name, error.message);
        setData(null);
      });
  }, []);

  return data;
};
