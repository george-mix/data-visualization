import React, {Suspense} from 'react';
import {FullScreenSpinner} from '@components/UI/FullScreenSpinner';

export const SuspenseProvider: React.FC = ({children}) => (
  <Suspense fallback={<FullScreenSpinner />}>
    {children}
  </Suspense>
);
