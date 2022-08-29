import React, {useLayoutEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {NotFound} from '@pages/NotFound';
import {articleRoutes, mainRoutes} from './routes';

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      {[...articleRoutes, ...mainRoutes].map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
