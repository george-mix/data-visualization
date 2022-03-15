import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {mainRoutes} from '../routes';

export const AppRouter: React.FC = () => (
	<Routes>
		{mainRoutes.map(route => (
			<Route
				key={route.path}
				path={route.path}
				element={<route.element />}
			/>
		))}
	</Routes>
);
