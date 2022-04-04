class CarStatus {
    static IN_RENT = 'IN_RENT';
    static IN_BOOKING = 'IN_BOOKING';
    static IN_RENT_PAUSED = 'IN_RENT_PAUSED';
    static UNAVAILABLE = 'UNAVAILABLE';
    static FREE = 'FREE';
}

export const BACKEND_URL = "http://localhost:8080/api/v1";

export default CarStatus;