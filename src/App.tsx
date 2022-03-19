import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppNavigation} from '@components/navigation/AppNavigation';
import {AppRouter} from '@utils/AppRouter';

const App: React.FC = () => (
	<Router>
		<AppNavigation />
		<AppRouter />
	</Router>
);

export default App;
