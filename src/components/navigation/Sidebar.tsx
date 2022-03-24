import React from 'react';
import {Box, Drawer, Divider} from '@mui/material';
import {articleRoutes, mainRoutes} from '@utils/routes';
import {NavList} from './NavList';

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
			<NavList routes={mainRoutes}/>
			<Divider />
			<NavList routes={articleRoutes} />
		</Box>
	</Drawer>
);

