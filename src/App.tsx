import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRouter} from '@utils/AppRouter';
import {TranslationProvider} from '@utils/providers/TranslationProvider';
import {StyleProvider} from '@utils/providers/StyleProvider';

const App: React.FC = () => (
  <StyleProvider>
    <Suspense fallback={<div>Loading...</div>}>
      <TranslationProvider>
        <Router>
          <AppNavigation />
          <AppRouter />
        </Router>
      </TranslationProvider>
    </Suspense>
  </StyleProvider>
);

export default App;
