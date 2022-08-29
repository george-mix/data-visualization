import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRoutes} from '@router/AppRoutes';
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
            <AppRoutes />
          </Router>
        </TranslationProvider>
      </SuspenseProvider>
    </StyleProvider>
  </StoreProvider>
);

export default App;
