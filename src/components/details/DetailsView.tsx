import { IDetailProps, OrderStatus } from '../../types/types';
import { FC } from 'react';

interface DetailsViewProps {
    detail: IDetailProps;
    key: string;
}

const DetailsView: FC<DetailsViewProps> = ({ detail, key }) => {
    const getStatusValue = (status: OrderStatus) => {
        switch (status) {
            case OrderStatus.RENT:
                return 'Renting';
            case OrderStatus.BOOKING:
                return 'Booking';
            case OrderStatus.RENT_PAUSED:
                return 'Renting paused';
            default:
                return 'No such status';
        }
    };

    return (
        <tr key={key}>
            <td>
                {new Date(detail.start).toLocaleString()}-
                {new Date(detail.end).toLocaleString()}
            </td>
            <td>{getStatusValue(detail.status)}</td>
            <td>{detail.price}</td>
        </tr>
    );
};

export default DetailsView;
