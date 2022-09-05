import React, {Suspense} from 'react';
import {RouteFallback} from '@components/UI/RouteFallback';

export const RouteSuspenseProvider: React.FC = ({children}) => (
  <Suspense fallback={<RouteFallback />}>
    {children}
  </Suspense>
);
