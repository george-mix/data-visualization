import {WikiQuery} from '@helpers/common/interfaces';
import {parseRemoteJson} from '@helpers/functions/parseRemoteJson';
import {combineTwoStrings} from '@helpers/functions/stringUtils';
import {findThumbnails} from '@helpers/functions/wikiUtils';

const BASE_URL = import.meta.env.VITE_MEDIAWIKI_BASE_URL;

export const getThumbnailUrlList = async (titleList: string[]) => {
  try {
    const joinedTitleList = titleList.join('|');
    const query = `action=query&format=json&origin=*&prop=pageimages&titles=${joinedTitleList}&formatversion=2&piprop=thumbnail&pithumbsize=100`;

    const url = combineTwoStrings(BASE_URL, query);
    const encodedUrl = encodeURI(url);

    const data = await parseRemoteJson<WikiQuery>(encodedUrl);
    const thumbnailList = findThumbnails(data.query.pages);

    return thumbnailList;
  } catch (error) {
    return Promise.reject(error);
  }
};
