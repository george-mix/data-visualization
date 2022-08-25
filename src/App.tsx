import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRouter} from '@router/AppRouter';
import {TranslationProvider} from '@utils/providers/TranslationProvider';
import {StyleProvider} from '@utils/providers/StyleProvider';
import {StoreProvider} from '@utils/providers/StoreProvider';
import {SuspenseProvider} from '@utils/providers/SuspenseProvider';

const App: React.FC = () => (
  <StoreProvider>
    <StyleProvider>
      <SuspenseProvider>
        <TranslationProvider>
          <Router>
            <AppNavigation />
            <AppRouter />
          </Router>
        </TranslationProvider>
      </SuspenseProvider>
    </StyleProvider>
  </StoreProvider>
);

export default App;
