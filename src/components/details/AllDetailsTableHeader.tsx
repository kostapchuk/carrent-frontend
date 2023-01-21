import React, {FC} from 'react';

const AllDetailsTableHeader: FC = () => {
    return (
        <thead>
        <tr>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
            <th scope="col">Price, $</th>
        </tr>
        </thead>
    );
};

export default AllDetailsTableHeader;
