import React from 'react';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRoutes} from '@router/AppRoutes';
import {Footer} from '@components/Footer';
import {RouteSuspenseProvider} from '@helpers/providers/RouteSuspenseProvider';

export const AppLayout: React.FC = () => (
  <>
    <AppNavigation />
    <RouteSuspenseProvider>
      <AppRoutes />
    </RouteSuspenseProvider>
    <Footer />
  </>
);
