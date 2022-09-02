import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {TranslationProvider} from '@utils/providers/TranslationProvider';
import {StyleProvider} from '@utils/providers/StyleProvider';
import {StoreProvider} from '@utils/providers/StoreProvider';
import {SuspenseProvider} from '@utils/providers/SuspenseProvider';
import {AppLayout} from '@layouts/AppLayout';
import {ServerStateProvider} from '@utils/providers/ServerStateProvider';

const App: React.FC = () => (
  <StoreProvider>
    <ServerStateProvider>
      <StyleProvider>
        <SuspenseProvider>
          <TranslationProvider>
            <Router>
              <AppLayout />
            </Router>
          </TranslationProvider>
        </SuspenseProvider>
      </StyleProvider>
    </ServerStateProvider>
  </StoreProvider>
);

export default App;
