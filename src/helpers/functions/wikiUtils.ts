import {PageThumbnail, WikiPageInfo} from '@helpers/common/interfaces';

export const findThumbnails = (pages: WikiPageInfo[]) => {
  const thumbnails: PageThumbnail[] = pages.map((page) => {
    const pageTitle = page.title;
    const thumbnailUrl = page?.thumbnail?.source;

    return {pageTitle, thumbnailUrl};
  });

  return thumbnails;
};
