import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {NotFound} from '@pages/NotFound';
import {articleRoutes, mainRoutes} from './routes';

export const AppRouter: React.FC = () => (
	<Routes>
		{[...articleRoutes, ...mainRoutes].map(route => (
			<Route
				key={route.path}
				path={route.path}
				element={<route.element />}
			/>
		))}
		<Route path="*" element={<NotFound />} />
	</Routes>
);
