import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { allRoutes, publicRoutes, RouteNames } from '../routes';
import { selectLoggedIn } from '../slices/UserSlice';

const AppRouter: FC = () => {
    const loggedIn = useSelector(selectLoggedIn);

    return (
        <Routes>
            {(loggedIn ? allRoutes : publicRoutes).map(route => (
                <Route
                    path={route.path}
                    element={route.component}
                    key={route.path}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={RouteNames.CARS} replace />}
            />
        </Routes>
    );
};

export default AppRouter;
