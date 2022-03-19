import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {NotFound} from '@pages/NotFound';
import {mainRoutes} from './routes';

export const AppRouter: React.FC = () => (
	<Routes>
		{mainRoutes.map(route => (
			<Route
				key={route.path}
				path={route.path}
				element={<route.element />}
			/>
		))}
		<Route path="*" element={<NotFound />} />
	</Routes>
);
