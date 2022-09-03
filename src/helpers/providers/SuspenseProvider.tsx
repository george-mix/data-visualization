import React, {Suspense} from 'react';

export const SuspenseProvider: React.FC = ({children}) => (
  <Suspense fallback={<pre>Loading...</pre>}>
    {children}
  </Suspense>
);
