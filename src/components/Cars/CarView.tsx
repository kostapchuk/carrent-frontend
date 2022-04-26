import CarCard from "./CarCard";
import {FC} from "react";
import {CarViewProps} from "../../types/types";

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