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
                    detail={d}
                    key={shortid.generate()}
                />)
        }
        </tbody>
    );
};

export default AllDetailsTableBody;
