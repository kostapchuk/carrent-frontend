class OrderStatus {
    static RENT = 'RENT';
    static BOOKING = 'BOOKING';
    static RENT_PAUSED = 'RENT_PAUSED';

    static getStatusValue = (status) => {
        console.log(status);
        switch (status) {
            case OrderStatus.RENT:
                return "Renting"
            case OrderStatus.BOOKING:
                return "Booking"
            case OrderStatus.RENT_PAUSED:
                return "Renting paused"
            default:
                return "No such status"
        }
    }
}

export default OrderStatus;