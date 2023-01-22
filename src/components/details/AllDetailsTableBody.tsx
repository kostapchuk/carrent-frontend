import React, {FC} from 'react';
import DetailsRowContainer from "./DetailsRowContainer";
import shortid from "shortid";
import {IDetail} from "../../types/types";

interface AllDetailsTableHeaderProps {
    details: IDetail[],
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
