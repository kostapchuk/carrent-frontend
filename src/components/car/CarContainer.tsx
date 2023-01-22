import React, {FC} from 'react';
import {CarStatus, Car} from "../../types/types";
import LocalStorage from "../../storage/LocalStorage";
import ApiService from "../../api/ApiService";
import {updateBalance} from "../../slices/BalanceSlice";
import {useDispatch} from "react-redux";
import CarView from "./CarView";

interface CarContainerProps {
    car: Car,
}

const CarContainer: FC<CarContainerProps> = ({car}) => {

    const dispatch = useDispatch();

    const processOrderReducer = (status: CarStatus, carId: number) => {
        const order = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: status,
        }
        ApiService.processOrder(order)
            .then(() => {
                if (status === CarStatus.FREE) {
                    ApiService.findBalance().then((res: any) => {
                        dispatch(updateBalance(res.data))
                    })
                }
            });
    }

    return (
        <CarView key={car.id}
                 car={car}
                 startRent={() => processOrderReducer(CarStatus.IN_RENT, car.id)}
                 startBook={() => processOrderReducer(CarStatus.IN_BOOKING, car.id)}
                 finishRide={() => processOrderReducer(CarStatus.FREE, car.id)}
                 pauseRent={() => processOrderReducer(CarStatus.IN_RENT_PAUSED, car.id)}/>
    );
};

export default CarContainer;
