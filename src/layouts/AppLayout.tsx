import React from 'react';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRoutes} from '@router/AppRoutes';
import {Footer} from '@components/Footer';

export const AppLayout: React.FC = () => (
  <>
    <AppNavigation />
    <AppRoutes />
    <Footer />
  </>
);
