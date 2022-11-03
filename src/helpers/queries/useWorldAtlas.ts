import {feature, mesh} from 'topojson';
import {GeometryObject} from 'topojson-specification';
import {useQuery} from '@tanstack/react-query';
import {WorldAtlas} from '@helpers/common/interfaces';
import {getWorldAtlas} from '@helpers/services/unpkg';

const worldAtlasUrl110m = import.meta.env.VITE_WORLD_ATLAS_JSON_URL_110M;

type UseWorldAtlas = () => [WorldAtlas | undefined, boolean, boolean];

export const useWorldAtlas: UseWorldAtlas = () => {
  const {data, isLoading, isError} = useQuery(
    ['worldAtlas'],
    () => getWorldAtlas(worldAtlasUrl110m),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 60 * 12,
      select(topology) {
        const {countries} = topology.objects;
        const worldAtlas: WorldAtlas = {
          countries: feature(topology, countries),
          interiors: mesh(
            topology,
            countries as GeometryObject,
            (a, b) => a !== b,
          ),
        };

        return worldAtlas;
      },
    },
  );

  return [data, isLoading, isError];
};
