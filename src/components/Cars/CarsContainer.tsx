import React, {FC, useEffect, useState} from "react";
import LocalStorage from "../../storage/LocalStorage";
import CarView from "./CarView";
import ApiService from "../../api/ApiService";
import {useDispatch, useSelector} from "react-redux";
import {updateBalance} from '../../slices/BalanceSlice'
import {CarStatus, ICar} from "../../types/types";
import {selectLoggedIn} from "../../slices/UserSlice";

const CarsContainer: FC = () => {

    const dispatch = useDispatch();

    const [cars, setCars] = useState<ICar[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [update, setUpdate] = useState<boolean>(true);
    const loggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        if (loggedIn) {
            ApiService.fetchAvailableCars()
                .then((res: any) => {
                    setCars(res.data.carsDto);
                });
        } else {
            ApiService.fetchFreeCars()
                .then((res: any) => {
                    setCars(res.data.carsDto);
                });
        }
        setLoading(false);
    }, [loading, setCars, update, loggedIn]);

    const processOrderReducer = (status: CarStatus, carId: number) => {
        const order = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: status,
        }
        ApiService.processOrder(order)
            .then(() => {
                setUpdate(!update);
                if (status === CarStatus.FREE) {
                    ApiService.findBalance().then((res: any) => {
                        dispatch(updateBalance(res.data))
                    })
                }
            });
    }

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {loading && <p>⏱⏱⏱⏱⏱</p>}
                {!loading && cars.map(c => <CarView key={c.id}
                                                    car={c}
                                                    startRent={() => processOrderReducer(CarStatus.IN_RENT, c.id)}
                                                    startBook={() => processOrderReducer(CarStatus.IN_BOOKING, c.id)}
                                                    finishRide={() => processOrderReducer(CarStatus.FREE, c.id)}
                                                    pauseRent={() => processOrderReducer(CarStatus.IN_RENT_PAUSED, c.id)}
                                                    loading={loading}/>)}
            </div>
        </div>
    );
}

export default CarsContainer;
