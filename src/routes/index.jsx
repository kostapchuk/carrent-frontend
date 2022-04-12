import LoginContainer from "../components/Login/LoginContainer";
import RegisterContainer from "../components/Register/RegisterContainer";
import RidesContainer from "../components/Rides/RidesContainer";
import CarsContainer from "../components/Cars/CarsContainer";
import CarContainer from "../components/Cars/CarContainer";
import RegistrationResultView from "../components/Register/RegistrationResultView";
import UploadFileComponent from "../components/documents/UploadFileComponent";
import UsersContainer from "../components/users/UsersContainer";
import UserContainer from "../components/users/UserContainer";

export const RouteNames = {
    LOGIN: "/login",
    REGISTER: "/register",
    RIDES: "/rides",
    CARS: "/cars",
    SUCCESS_PAYMENT: "/success-payment",
    CANCELLED_PAYMENT: "/cancelled-payment",
    CAR: "/cars/:id",
    REGISTER_RESULT: "/register-result",
    DOCUMENTS: "/documents",
    ADMIN_USERS: "/admin/users",
    ADMIN_USER: "/admin/users/:id",
}

export const publicRoutes = [
    {path: RouteNames.LOGIN, exact: true, component: <LoginContainer/>},
    {path: RouteNames.REGISTER, exact: true, component: <RegisterContainer/>},
    {path: RouteNames.CARS, exact: true, component: <CarsContainer/>},
    {path: RouteNames.CAR, exact: true, component: <CarContainer/>},
    {path: RouteNames.REGISTER_RESULT, exact: true, component: <RegistrationResultView/>},
]

export const allRoutes = [
    ...publicRoutes,
    {path: RouteNames.RIDES, exact: true, component: <RidesContainer/>},
    {path: RouteNames.SUCCESS_PAYMENT, exact: true, component: <RidesContainer/>},
    {path: RouteNames.CANCELLED_PAYMENT, exact: true, component: <LoginContainer/>},
    {path: RouteNames.DOCUMENTS, exact: true, component: <UploadFileComponent/>},
    {path: RouteNames.ADMIN_USERS, exact: true, component: <UsersContainer/>},
    {path: RouteNames.ADMIN_USER, exact: true, component: <UserContainer/>},
]