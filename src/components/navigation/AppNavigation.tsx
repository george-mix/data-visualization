import React, {useState} from 'react';
import {Navbar} from './Navbar';
import {Sidebar} from './Sidebar';

export const AppNavigation: React.FC = () => {
	const [sidebar, setSidebar] = useState<boolean>(false);

	const toggleSidebar = () => {
		setSidebar(!sidebar);
	};

	return (
		<>
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
		</>
	);
};
