import React, {FC} from 'react';
import DetailsRowContainer from "./DetailsRowContainer";
import shortid from "shortid";
import {Details} from "../../types/types";

interface AllDetailsTableHeaderProps {
    details: Details[],
}

const AllDetailsTableBody: FC<AllDetailsTableHeaderProps> = ({details}) => {
    return (
        <tbody>
        {
            details.map(d =>
                <DetailsRowContainer
                    key={shortid()}
                    detail={d}
                />)
        }
        </tbody>
    );
};

export default AllDetailsTableBody;
