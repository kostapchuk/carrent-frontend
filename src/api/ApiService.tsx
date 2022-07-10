import { AxiosResponse } from 'axios';

import LocalStorage from '../storage/LocalStorage';
import { ICar, IRide, IUser } from '../types/types';
import ApiClient from './ApiClient';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, config?: object) =>
    ApiClient.get(url, config).then(responseBody),
  post: (url: string, body?: object, config?: object) =>
    ApiClient.post(url, body, config).then(responseBody),
  put: (url: string, body: object, config?: object) =>
    ApiClient.put(url, body, config).then(responseBody),
};

export interface CarsDto {
  carsDto: ICar[];
}

export interface UserDtos {
  userDtos: IUser[];
}

export interface UserRolesDto {
  roles: string[];
}

export interface UserStatusesDto {
  statuses: string[];
}

export interface RideDtos {
  rideDtos: IRide[];
}

export interface RegisterResponseDto {
  success: boolean;
  message: string;
}

export interface LoginResponseDto {
  userId: string;
  token: string;
  role: string;
}

export const Car = {
  fetchFreeCars: (): Promise<CarsDto> => requests.get('/cars/free'),
  fetchAvailableCars: (): Promise<CarsDto> =>
    requests.get(`/cars/available/${LocalStorage.getUserId()}`),
};

export const User = {
  fetchUsers: (): Promise<UserDtos> =>
    requests.get('/users', {
      headers: { Authorization: LocalStorage.getToken() },
    }),
  fetchRoles: (): Promise<UserRolesDto> =>
    requests.get('/users/roles', {
      headers: { Authorization: LocalStorage.getToken() },
    }),
  fetchStatuses: (): Promise<UserStatusesDto> =>
    requests.get('/users/statuses', {
      headers: { Authorization: LocalStorage.getToken() },
    }),
  register: (user: object): Promise<RegisterResponseDto> =>
    requests.post('/users', { ...user }),
  findBalance: (): Promise<number> =>
    requests.get(`/users/${LocalStorage.getUserId()}/balance`, {
      headers: { Authorization: LocalStorage.getToken() },
    }),
  payDebt: (): Promise<void> =>
    requests.post(
      `/users/${LocalStorage.getUserId()}/pay`,
      {},
      {
        headers: { Authorization: LocalStorage.getToken() },
      }
    ),
  findDebt: (): Promise<number> =>
    requests.get(`/users/${LocalStorage.getUserId()}/debt`, {
      headers: { Authorization: LocalStorage.getToken() },
    }),
  retrieveRides: (): Promise<RideDtos> =>
    requests.get(`/users/${LocalStorage.getUserId()}/rides`, {
      headers: { Authorization: LocalStorage.getToken() },
    }),
  updateUser: (user: object): Promise<void> =>
    requests.put(
      '/users',
      { ...user },
      { headers: { Authorization: LocalStorage.getToken() } }
    ),

  login: (credentials: object): Promise<LoginResponseDto> =>
    requests.post('/auth/login', { ...credentials }),
  logout: (): Promise<void> => requests.post('/auth/logout'),
};

export const Order = {
  processOrder: (rent: object): Promise<void> =>
    requests.post(
      '/orders/',
      { ...rent },
      { headers: { Authorization: LocalStorage.getToken() } }
    ),
};

export const Photo = {
  uploadFile: (payload: object): Promise<void> =>
    requests.post('/documents', payload, {
      headers: { Authorization: LocalStorage.getToken() },
    }),
};
