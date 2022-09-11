import {combineTwoStrings} from '@helpers/functions/stringUtils';
import {parseRemoteCSV} from '@helpers/functions/parseRemoteCSV';

const BASE_URL = import.meta.env.VITE_GITHUB_GISTS_BASE_URL;

export const getParsedGist = async <T>(path: string) => {
  const URL = combineTwoStrings(BASE_URL, path);
  const data = await parseRemoteCSV<T>(URL);
  return data;
};
