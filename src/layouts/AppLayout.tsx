import React from 'react';
import {AppNavigation} from '@components/Navigation/AppNavigation';
import {AppRoutes} from '@router/AppRoutes';

export const AppLayout: React.FC = () => (
  <>
    <AppNavigation />
    <AppRoutes />
  </>
);
