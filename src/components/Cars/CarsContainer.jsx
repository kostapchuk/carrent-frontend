import {useEffect, useState} from "react";
import LocalStorage from "../../storage/LocalStorage";
import CarView from "./CarView";
import ApiService from "../../api/ApiService";
import CarStatus from "../../utils/const";
import {useDispatch} from "react-redux";
import {updateBalance} from '../../slices/BalanceSlice'


const CarsContainer = () => {

    const dispatch = useDispatch();

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(true);

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
                    ApiService.findBalance().then(res => {
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