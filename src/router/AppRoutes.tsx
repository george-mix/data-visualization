import React, {lazy, useLayoutEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AppPaths} from './routes';

const NotFound = lazy(() => import('@pages/NotFound'));
const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const YouTubeBiggestChannels = lazy(() => import('@pages/YouTubeBiggestChannels'));
const JamesBondFilms = lazy(() => import('@pages/JamesBondFilms'));

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="*"
        element={<NotFound />}
      />
      <Route
        path={AppPaths.Home}
        element={<Home />}
      />
      <Route
        path={AppPaths.About}
        element={<About />}
      />
      <Route
        path={AppPaths.YouTubeBiggestChannels}
        element={<YouTubeBiggestChannels />}
      />
      <Route
        path={AppPaths.JamesBondFilms}
        element={<JamesBondFilms />}
      />
    </Routes>
  );
};
