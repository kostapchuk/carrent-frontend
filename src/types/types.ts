export enum CarStatus {
  FREE = 'FREE',
  IN_RENT = 'IN_RENT',
  IN_BOOKING = 'IN_BOOKING',
  IN_RENT_PAUSED = 'IN_RENT_PAUSED',
  UNAVAILABLE = 'UNAVAILABLE',
}

export enum OrderStatus {
  RENT = 'RENT',
  BOOKING = 'BOOKING',
  RENT_PAUSED = 'RENT_PAUSED',
}

export interface ICar {
  id: number;
  mark: string;
  model: string;
  imgUrl: string;
  rentPricePerHour: number;
  bookPricePerHour: number;
  carStatus: CarStatus;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  documentImg1: string;
  documentImg2: string;
  verified: boolean;
  role: string;
  status: string;
}

export interface IDetail {
  start: Date;
  end: Date;
  status: OrderStatus;
  price: number;
}

export interface IRide {
  mark: string;
  model: string;
  date: Date;
  totalPrice: number;
  totalTimeHours: number;
  rideDetailsDtos: IDetail[];
}

export interface IDetailProps {
  start: Date;
  end: Date;
  status: OrderStatus;
  price: number;
}
