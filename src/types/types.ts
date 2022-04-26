export enum CarStatus {
    FREE,
    IN_RENT,
    IN_BOOKING,
    IN_RENT_PAUSED,
    UNAVAILABLE,
}

export interface ICar {
    id: number,
    mark: string,
    model: string,
    imgUrl: string,
    rentPricePerHour: number,
    bookPricePerHour: number,
    carStatus: CarStatus,
}

export interface CarViewProps {
    car: ICar,
    startRent?: () => void,
    startBook?: () => void,
    finishRide?: () => void,
    pauseRent?: () => void,
    loading: boolean,
}

export interface CarCardProps {
    car: ICar,
    startRent?: () => void,
    startBook?: () => void,
    finishRide?: () => void,
    pauseRent?: () => void,
}

export enum OrderStatus {
    RENT,
    BOOKING,
    RENT_PAUSED,
}

export interface DetailProps {
    start: Date,
    end: Date,
    status: OrderStatus,
    price: number,
}

export interface IRole {
    name: string,
}

export interface IStatus {
    name: string,
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    documentImg1: string,
    documentImg2: string,
    verified: boolean,
    role: IRole,
    status: IStatus,
}

export interface IDetail {
    start: Date,
    end: Date,
    status: OrderStatus,
    price: number,
}

export interface IRide {
    mark: string,
    model: string,
    date: Date,
    totalPrice: number,
    totalTimeHours: number,
    details: IDetail[],
}
