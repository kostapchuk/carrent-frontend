import {Details, OrderStatus} from "../../types/types";
import React, {FC} from 'react';
import DetailsRowView from "./DetailsRowView";

interface DetailsRowContainerProps {
    detail: Details,
}

const DetailsRowContainer: FC<DetailsRowContainerProps> = ({detail}) => {

    const retrieveStatusValue = (status: OrderStatus) => {
        switch (status) {
            case OrderStatus.RENT:
                return "Renting"
            case OrderStatus.BOOKING:
                return "Booking"
            case OrderStatus.RENT_PAUSED:
                return "Renting paused"
            default:
                return "No status"
        }
    }

    return (
        <DetailsRowView detail={detail} retrieveStatusValue={retrieveStatusValue}/>
    );
}

export default DetailsRowContainer;
