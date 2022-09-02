import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {TranslationProvider} from '@utils/providers/TranslationProvider';
import {StyleProvider} from '@utils/providers/StyleProvider';
import {ClientStateProvider} from '@utils/providers/ClientStateProvider';
import {SuspenseProvider} from '@utils/providers/SuspenseProvider';
import {AppLayout} from '@layouts/AppLayout';
import {ServerStateProvider} from '@utils/providers/ServerStateProvider';

const App: React.FC = () => (
  <ClientStateProvider>
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
  </ClientStateProvider>
);

export default App;
