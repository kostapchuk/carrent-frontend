import {useEffect, useState} from "react";
import LocalStorage from "../../storage/LocalStorage";
import CarView from "./CarView";
import ApiService from "../../api/ApiService";
import CarStatus from "../../utils/const";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(true);

    const startRent = (carId) => {
        const rent = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: CarStatus.IN_RENT,
        }
        ApiService.processOrder(rent)
            .then(r => {
                setUpdate(!update);
                console.log("Created Order");
            });
    }

    useEffect(() => {
        if (LocalStorage.getUserId()) {
            console.log("fetchAvailableCars");
            ApiService.fetchAvailableCars()
                .then(res => {
                    console.log(res.data.carsDto);
                    setCars(res.data.carsDto.map(c => <CarView key={c.id} car={c}
                                                               startRent={() => startRent(c.id)}
                                                               startBook={() => startBook(c.id)}
                                                               finishRide={() => finishRide(c.id)}
                                                               pauseRent={() => pauseRent(c.id)}
                                                               loading={loading}/>));
                });
        } else {
            console.log("fetchFreeCars");
            ApiService.fetchFreeCars()
                .then(res => {
                    console.log(res.data.carsDto);
                    setCars(res.data.carsDto.map(c => <CarView key={c.id} car={c}
                                                               startRent={() => startRent(c.id)}
                                                               startBook={() => startBook(c.id)}
                                                               finishRide={() => finishRide(c.id)}
                                                               pauseRent={() => pauseRent(c.id)}
                                                               loading={loading}/>));
                });
        }
        setLoading(false);
    }, [loading, setCars, update]);

    const startBook = (carId) => {
        const book = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: CarStatus.IN_BOOKING,
        }
        ApiService.processOrder(book)
            .then(r => {
                setUpdate(!update);
                console.log("Created Order");
            });
    }

    const finishRide = (carId) => {
        const ride = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: CarStatus.FREE,
        }
        ApiService.processOrder(ride)
            .then(r => {
                setUpdate(!update);
                console.log("Created Order");
            });
    }

    const pauseRent = (carId) => {
        const rent = {
            userId: LocalStorage.getUserId(),
            carId: carId,
            carStatus: CarStatus.IN_RENT_PAUSED,
        }
        ApiService.processOrder(rent)
            .then(r => {
                setUpdate(!update);
                console.log("Created Order");
            });
    }

    return (
        <>
            <div>
                {loading && <p>⏱⏱⏱⏱⏱</p>}
                {!loading && cars}
            </div>
        </>
    );
}

export default CarsContainer;