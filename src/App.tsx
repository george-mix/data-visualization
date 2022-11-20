import React from 'react';
import {TranslationProvider} from '@helpers/providers/TranslationProvider';
import {StyleProvider} from '@helpers/providers/StyleProvider';
import {ClientStateProvider} from '@helpers/providers/ClientStateProvider';
import {SuspenseProvider} from '@helpers/providers/SuspenseProvider';
import {AppLayout} from '@layouts/AppLayout';
import {ServerStateProvider} from '@helpers/providers/ServerStateProvider';
import {RouterProvider} from '@router/RouterProvider';

const App: React.FC = () => (
  <ClientStateProvider>
    <ServerStateProvider>
      <StyleProvider>
        <SuspenseProvider>
          <TranslationProvider>
            <RouterProvider>
              <AppLayout />
            </RouterProvider>
          </TranslationProvider>
        </SuspenseProvider>
      </StyleProvider>
    </ServerStateProvider>
  </ClientStateProvider>
);

export default App;
