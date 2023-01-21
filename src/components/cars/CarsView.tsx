import React, {FC} from 'react';
import CarContainer from "./CarContainer";
import {ICar} from "../../types/types";

interface CarsViewProps {
    cars: ICar[],
    loading: boolean
}

const CarsView: FC<CarsViewProps> = ({cars, loading,}) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {loading && <p>⏱⏱⏱⏱⏱</p>}
                {cars.map(c => <CarContainer car={c}/>)}
            </div>
        </div>
    );
};

export default CarsView;
