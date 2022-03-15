import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppRouter} from './components/AppRouter';
import {Navbar} from './components/Navbar';

const App: React.FC = () => (
	<Router>
		<Navbar />
		<AppRouter />
	</Router>
);

export default App;
