import {Navigate, Route, Routes} from 'react-router-dom';
import {allRoutes, publicRoutes, RouteNames} from "../routes";
import Header from "./header/Header";
import LocalStorage from "../storage/LocalStorage";

const AppRouter = () => {
    return (
        <>
            <Header/>
            <Routes>
                {
                    (LocalStorage.getUserId() ? allRoutes : publicRoutes).map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               element={route.component}
                               key={route.path}
                        />
                    )
                }
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.CARS} replace/>}
                />
            </Routes>
        </>
    )
}

export default AppRouter;