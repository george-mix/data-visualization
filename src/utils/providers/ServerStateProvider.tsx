import React from 'react';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

export const ServerStateProvider: React.FC = ({children}) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
