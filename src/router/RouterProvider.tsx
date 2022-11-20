import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';

export const RouterProvider: React.FC = ({children}) => {
  const isProd = import.meta.env.PROD;

  // this webapp was deployed to GitHub pages that do not support browser routing
  if (isProd) {
    return (
      <HashRouter basename="/">
        {children}
      </HashRouter>
    );
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {children}
    </BrowserRouter>
  );
};
