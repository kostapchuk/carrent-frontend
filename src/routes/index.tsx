import CarContainer from '../components/Cars/CarContainer';
import CarsContainer from '../components/Cars/CarsContainer';
import UploadFileComponent from '../components/documents/UploadFileComponent';
import LoginContainer from '../components/Login/LoginContainer';
import ResultContainer from '../components/payment/ResultContainer';
import RegisterContainer from '../components/Register/RegisterContainer';
import RegistrationResultView from '../components/Register/RegistrationResultView';
import RidesContainer from '../components/rides/RidesContainer';
import UsersContainer from '../components/users/UsersContainer';

export const RouteNames = {
  LOGIN: '/login',
  REGISTER: '/register',
  RIDES: '/rides',
  CARS: '/cars',
  SUCCESS_PAYMENT: '/success-payment',
  CANCELLED_PAYMENT: '/cancelled-payment',
  CAR: '/cars/:id',
  REGISTER_RESULT: '/register-result',
  DOCUMENTS: '/documents',
  ADMIN_USERS: '/admin/users',
  ADMIN_USER: '/admin/users/:id',
};

export const publicRoutes = [
  { path: RouteNames.LOGIN, component: <LoginContainer /> },
  { path: RouteNames.REGISTER, component: <RegisterContainer /> },
  { path: RouteNames.CARS, component: <CarsContainer /> },
  { path: RouteNames.CAR, component: <CarContainer /> },
  { path: RouteNames.REGISTER_RESULT, component: <RegistrationResultView /> },
];

export const allRoutes = [
  ...publicRoutes,
  { path: RouteNames.RIDES, component: <RidesContainer /> },
  {
    path: RouteNames.SUCCESS_PAYMENT,
    component: <ResultContainer message="Success payment" success />,
  },
  {
    path: RouteNames.CANCELLED_PAYMENT,
    component: <ResultContainer message="Cancelled payment" success={false} />,
  },
  { path: RouteNames.DOCUMENTS, component: <UploadFileComponent /> },
  { path: RouteNames.ADMIN_USERS, component: <UsersContainer /> },
];
