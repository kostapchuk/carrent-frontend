import {IDetailProps, OrderStatus} from "../../types/types";
import React, {FC} from 'react';

interface DetailsRowViewProps {
    detail: IDetailProps,
    retrieveStatusValue: (status: OrderStatus) => String,
}

const DetailsRowView: FC<DetailsRowViewProps> = ({detail, retrieveStatusValue}) => {
    return (
        <tr>
            <td>
                {new Date(detail.start).toLocaleString()}
                -
                {new Date(detail.end).toLocaleString()}
            </td>
            <td>{retrieveStatusValue(detail.status)}</td>
            <td>{detail.price}</td>
        </tr>
    );
}

export default DetailsRowView;
