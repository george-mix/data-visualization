import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppRouter} from '@utils/AppRouter';

const App: React.FC = () => (
	<Router>
		<AppRouter />
	</Router>
);

export default App;
