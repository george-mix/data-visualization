import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRouter} from '@utils/AppRouter';
import {TranslationProvider} from '@utils/providers/TranslationProvider';

const App: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <TranslationProvider>
      <Router>
        <AppNavigation />
        <AppRouter />
      </Router>
    </TranslationProvider>
  </Suspense>
);

export default App;
