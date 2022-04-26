import shortid from "shortid";
import {OrderStatus} from "../../types/types";
import React from 'react';

const DetailsView = ({detail}) => {

    const getStatusValue = (status) => {
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

    return (
        <tr key={shortid.generate()}>
            <td>
                {new Date(detail.start).toLocaleString()}
                -
                {new Date(detail.end).toLocaleString()}
            </td>
            <td>{getStatusValue(detail.status)}</td>
            <td>{detail.price}</td>
        </tr>
    );
}

export default DetailsView;