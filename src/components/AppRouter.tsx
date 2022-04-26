import {Navigate, Route, Routes} from 'react-router-dom';
import {allRoutes, publicRoutes, RouteNames} from '../routes';
import LocalStorage from '../storage/LocalStorage';
import React from 'react';

function AppRouter() {
    return (
        <Routes>
            {
                (LocalStorage.getUserId() ? allRoutes : publicRoutes).map((route) => (
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path}
                    />
                ))
            }
            <Route
                path="*"
                element={<Navigate to={RouteNames.CARS} replace/>}
            />
        </Routes>
    );
}

export default AppRouter;
