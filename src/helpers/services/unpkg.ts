import {Topology} from 'topojson-specification';
import {combineTwoStrings} from '@helpers/functions/stringUtils';
import {parseRemoteJson} from '@helpers/functions/parseRemoteJson';

const BASE_URL = import.meta.env.VITE_UNPKG_BASE_URL;

export const getWorldAtlas = async (worldAtlasUrl: string) => {
  const URL = combineTwoStrings(BASE_URL, worldAtlasUrl);
  const topology = parseRemoteJson<Topology>(URL);
  return topology;
};
