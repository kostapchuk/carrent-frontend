import {useContext, useEffect, useState} from "react";
import LocalStorage from "../../storage/LocalStorage";
import CarView from "./CarView";
import ApiService from "../../api/ApiService";
import CarStatus from "../../utils/const";
import BalanceContext from "../../context/BalanceContext";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(true);
    const {setBalance} = useContext(BalanceContext);

    useEffect(() => {
        if (LocalStorage.getUserId()) {
            ApiService.fetchAvailableCars()
                .then(res => {
                    setCars(res.data.carsDto);
                });
        } else {
            ApiService.fetchFreeCars()
                .then(res => {
                    setCars(res.data.carsDto);
                });
        }
        setLoading(false);
    }, [loading, setCars, update]);

    const processOrderReducer = (status, carId) => {
        const order = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: status,
        }
        ApiService.processOrder(order)
            .then(r => {
                setUpdate(!update);
                if (status === CarStatus.FREE) {
                    ApiService.fetchBalance().then(res => {
                        setBalance(res.data)
                    })
                }
            });
    }

    return (
        <div className="container">
            <div className="row">
                {loading && <p>⏱⏱⏱⏱⏱</p>}
                {!loading && cars.map(c => <CarView key={c.id} car={c}
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