import {Navigate, Route, Routes} from 'react-router-dom';
import {allRoutes, publicRoutes, RouteNames} from '../routes';
import React from 'react';
import {useSelector} from "react-redux";
import {selectLoggedIn} from "../slices/UserSlice";

function AppRouter() {

    const loggedIn = useSelector(selectLoggedIn);

    return (
        <Routes>
            {
                (loggedIn ? allRoutes : publicRoutes).map((route) => (
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
