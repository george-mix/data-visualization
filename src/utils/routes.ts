import {About} from '@pages/About';
import {Home} from '@pages/Home';
import {JamesBondFilms} from '@pages/JamesBondFilms';
import {YouTubeBiggestChannels} from '@pages/YouTubeBiggestChannels';
import {AppRoute} from './commonTypes';

export const mainRoutes: AppRoute[] = [
  {
    name: 'home.title',
    path: '/',
    element: Home,
  },
  {
    name: 'about.title',
    path: '/about',
    element: About,
  },
];

export const articleRoutes: AppRoute[] = [
  {
    name: 'youtube-channels.title',
    path: '/youtube-biggest-channels',
    element: YouTubeBiggestChannels,
  },
  {
    name: 'james-bond-films.title',
    path: '/james-bond-films',
    element: JamesBondFilms,
  },
];
