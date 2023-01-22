export enum CarStatus {
    FREE = "FREE",
    IN_RENT = "IN_RENT",
    IN_BOOKING = "IN_BOOKING",
    IN_RENT_PAUSED = "IN_RENT_PAUSED",
}

export interface Car {
    id: number,
    mark: string,
    model: string,
    imgUrl: string,
    rentPricePerHour: number,
    bookPricePerHour: number,
    carStatus: CarStatus,
}

export enum OrderStatus {
    RENT = "RENT",
    BOOKING = "BOOKING",
    RENT_PAUSED = "RENT_PAUSED",
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    documentImg1: string,
    documentImg2: string,
    verified: boolean,
    role: string,
    status: string,
}

export interface Details {
    start: Date,
    end: Date,
    status: OrderStatus,
    price: number,
}

export interface Ride {
    mark: string,
    model: string,
    date: Date,
    totalPrice: number,
    totalTimeHours: number,
    rideDetailsResponses: Details[],
}
