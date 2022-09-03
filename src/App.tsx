import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {TranslationProvider} from '@helpers/providers/TranslationProvider';
import {StyleProvider} from '@helpers/providers/StyleProvider';
import {ClientStateProvider} from '@helpers/providers/ClientStateProvider';
import {SuspenseProvider} from '@helpers/providers/SuspenseProvider';
import {AppLayout} from '@layouts/AppLayout';
import {ServerStateProvider} from '@helpers/providers/ServerStateProvider';

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
