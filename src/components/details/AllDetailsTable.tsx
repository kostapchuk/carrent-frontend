import React, {FC} from 'react';
import {Details} from "../../types/types";
import AllDetailsTableHeader from "./AllDetailsTableHeader";
import AllDetailsTableBody from "./AllDetailsTableBody";

interface AllDetailsTableProps {
    details: Details[],
}

const AllDetailsTable: FC<AllDetailsTableProps> = ({details}) => {

    return (
        <table className="table table-borderless">
            <AllDetailsTableHeader/>
            <AllDetailsTableBody details={details}/>
        </table>
    );
}

export default AllDetailsTable;
