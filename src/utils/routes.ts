import {About} from '@pages/About';
import {Home} from '@pages/Home';
import {AppRoute} from './interfaces';

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
