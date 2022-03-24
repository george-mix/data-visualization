import React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import {Link} from 'react-router-dom';
import {AppRoute} from '@utils/commonTypes';

export const NavList: React.FC<{
	routes: AppRoute[]
}> = ({routes}) => (
	<List>
		{routes.map(route => (
			<ListItem button key={route.name}>
				<Link to={route.path}>
					<ListItemText primary={route.name} />
				</Link>
			</ListItem>
		))}
	</List>
);
