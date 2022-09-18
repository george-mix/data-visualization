import React from 'react';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRoutes} from '@router/AppRoutes';
import {Footer} from '@components/Footer/Footer';
import {RouteSuspenseProvider} from '@helpers/providers/RouteSuspenseProvider';
import {Main} from '@components/UI/Main';

export const AppLayout: React.FC = () => (
  <>
    <AppNavigation />
    <RouteSuspenseProvider>
      <Main>
        <AppRoutes />
      </Main>
    </RouteSuspenseProvider>
    <Footer />
  </>
);
