import DetailsView from './DetailsView';
import shortid from 'shortid';
import { FC } from 'react';
import { IDetailProps } from '../../types/types';

interface DetailsContainerProps {
    details: IDetailProps[];
}

const DetailsContainer: FC<DetailsContainerProps> = ({ details }) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price, $</th>
                </tr>
            </thead>
            <tbody>
                {details.map(d => (
                    <DetailsView detail={d} key={shortid.generate()} />
                ))}
            </tbody>
        </table>
    );
};

export default DetailsContainer;
