import CarCard from "./CarCard";
import React, {FC} from "react";
import {ICar} from "../../types/types";

export interface CarViewProps {
    car: ICar | null,
    startRent?: () => void,
    startBook?: () => void,
    finishRide?: () => void,
    pauseRent?: () => void,
    loading: boolean,
}

const CarView: FC<CarViewProps> = ({
                                       car,
                                       loading,
                                       startRent,
                                       startBook,
                                       finishRide,
                                       pauseRent
                                   }) => {

    return (
        loading
            ?
            <p>⏰⏰⏰⏰⏰⏰</p>
            :
            <div className="col">
                <CarCard
                    car={car}
                    startRent={startRent}
                    startBook={startBook}
                    finishRide={finishRide}
                    pauseRent={pauseRent}
                />
            </div>
    )
}

export default CarView;
