import {useEffect, useState} from "react";
import LocalStorage from "../../storage/LocalStorage";
import CarView from "./CarView";
import ApiService from "../../api/ApiService";
import CarStatus from "../../utils/const";
import Header from "../header/Header";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    const startRent = (carId) => {
        const rent = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: CarStatus.IN_RENT,
        }
        ApiService.processOrder(rent);
    }

    // todo
    //  get all the cars that are free or all the free and one that is in the order by the current user
    useEffect(() => {
        ApiService.fetchCars()
            .then(res => {
                setCars(res.data.carsDto.map(c => <CarView key={c.id} car={c}
                                                           startRent={() => startRent(c.id)}
                                                           startBook={() => startBook(c.id)}
                                                           finishRide={() => finishRide(c.id)}
                                                           pauseRent={() => pauseRent(c.id)}
                                                           loading={loading}/>));
                setLoading(false);
            })
    }, [loading, setCars]);

    const startBook = (carId) => {
        const book = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: CarStatus.IN_BOOKING,
        }
        ApiService.processOrder(book);
    }

    const finishRide = (carId) => {
        const ride = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: CarStatus.FREE,
        }
        ApiService.processOrder(ride);
    }

    const pauseRent = (carId) => {
        const rent = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: CarStatus.IN_RENT_PAUSED,
        }
        ApiService.processOrder(rent);
    }

    return (
        <>
            <Header/>
            <div>
                {loading && <p>⏱⏱⏱⏱⏱</p>}
                {!loading && cars}
            </div>
        </>
    );
}

export default CarsContainer;