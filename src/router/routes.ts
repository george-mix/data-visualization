import {AppRoute, ArticleRoute} from "@helpers/common/interfaces";

export enum AppPaths {
  'NotFound' = '*',
  'Home' = '/',
  'About' = '/about',
  'YouTubeBiggestChannels' = '/youtube-biggest-channels',
  'JamesBondFilms' = '/james-bond-films',
};

export const mainRoutes: AppRoute[] = [
  {
    title: 'home.title',
    path: AppPaths.Home,
  },
  {
    title: 'about.title',
    path: AppPaths.About,
  },
];

export const articleRoutes: ArticleRoute[] = [
  {
    title: 'james-bond-films.title',
    path: AppPaths.JamesBondFilms,
    image: '/images.local/bond.jpg',
    teaser: 'james-bond-films.teaser',
  },
  {
    title: 'youtube-channels.title',
    path: AppPaths.YouTubeBiggestChannels,
    image: '/images.local/youtube.jpg',
    teaser: 'youtube-channels.teaser',
  },
];
