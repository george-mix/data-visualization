import {About} from '@pages/About';
import {Home} from '@pages/Home';
import {JamesBondFilms} from '@pages/JamesBondFilms';
import {YouTubeBiggestChannels} from '@pages/YouTubeBiggestChannels';
import {AppRoute} from './commonTypes';

export const mainRoutes: AppRoute[] = [
  {
    name: 'Home',
    path: '/',
    element: Home,
  },
  {
    name: 'About',
    path: '/about',
    element: About,
  },
];

export const articleRoutes: AppRoute[] = [
  {
    name: 'Most Popular YouTube Channels',
    path: '/youtube-biggest-channels',
    element: YouTubeBiggestChannels,
  },
  {
    name: 'James Bond Films',
    path: '/james-bond-films',
    element: JamesBondFilms,
  },
];
