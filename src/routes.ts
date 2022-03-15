import {About} from './pages/About';
import {Home} from './pages/Home';

export const mainRoutes = [
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
