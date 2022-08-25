import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRouter} from '@router/AppRouter';
import {TranslationProvider} from '@utils/providers/TranslationProvider';
import {StyleProvider} from '@utils/providers/StyleProvider';
import {StoreProvider} from '@utils/providers/StoreProvider';

const App: React.FC = () => (
  <StoreProvider>
    <StyleProvider>
      <Suspense fallback={<pre>Loading...</pre>}>
        <TranslationProvider>
          <Router>
            <AppNavigation />
            <AppRouter />
          </Router>
        </TranslationProvider>
      </Suspense>
    </StyleProvider>
  </StoreProvider>
);

export default App;
