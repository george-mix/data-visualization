import {AppRoute, ArticleRoute} from "@helpers/common/interfaces";
import BondLargeImage from '@assets/bond.large.jpg';
import BondTinyImage from '@assets/bond.tiny.jpg';
import YouTubeLargeImage from '@assets/youtube.large.jpg';
import YouTubeTinyImage from '@assets/youtube.tiny.jpg';

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
    largeImage: BondLargeImage,
    tinyImage: BondTinyImage,
    teaser: 'james-bond-films.teaser',
  },
  {
    title: 'youtube-channels.title',
    path: AppPaths.YouTubeBiggestChannels,
    largeImage: YouTubeLargeImage,
    tinyImage: YouTubeTinyImage,
    teaser: 'youtube-channels.teaser',
  },
];
