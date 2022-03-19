import React from 'react';
import {Box, Drawer, Divider, List, ListItem, ListItemText} from '@mui/material';
import {Link} from 'react-router-dom';
import {mainRoutes} from '@utils/routes';
import {AppRoute} from '@utils/interfaces';

interface SidebarProps {
    sidebar: boolean;
    toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({sidebar, toggleSidebar}) => (
	<Drawer anchor={'right'}
		open={sidebar}
		onClose={toggleSidebar}
	>
		<Box
			sx={{width: 250}}
			role="presentation"
			onClick={toggleSidebar}
			onKeyDown={toggleSidebar}
		>
			<SideArticleList routes={mainRoutes}/>
			<Divider />
            Articles
		</Box>
	</Drawer>
);

const SideArticleList: React.FC<{
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
