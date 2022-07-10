import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { allRoutes, publicRoutes, RouteNames } from '../routes';
import { selectLoggedIn } from '../slices/UserSlice';

const AppRouter: FC = () => {
  const loggedIn = useSelector(selectLoggedIn);

  return (
    <Routes>
      {(loggedIn ? allRoutes : publicRoutes).map((route) => (
        <Route element={route.component} key={route.path} path={route.path} />
      ))}
      <Route element={<Navigate replace to={RouteNames.CARS} />} path="*" />
    </Routes>
  );
};

export default AppRouter;
