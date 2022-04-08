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

    const sampleData = [
        {
            "id": 2,
            "mark": "Mercedes-Benz",
            "model": "E-class",
            "rentPricePerHour": 5,
            "bookPricePerHour": 1.5,
            "imgUrl": "https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl-copy/explore/overview/_jcr_content/highlightcontainer/par/highlighttile.MQ6.0.20201027111551.jpeg",
            "carStatus": "FREE"
        },
        {
            "id": 3,
            "mark": "BMW",
            "model": "M5",
            "rentPricePerHour": 11,
            "bookPricePerHour": 8.5,
            "imgUrl": "https://cdn.motor1.com/images/mgl/90w2l/s1/1x1/2022-bmw-m5-cs-front-view.webp",
            "carStatus": "FREE"
        },
        {
            "id": 4,
            "mark": "BMW",
            "model": "M5",
            "rentPricePerHour": 11,
            "bookPricePerHour": 8.5,
            "imgUrl": "https://cdn.motor1.com/images/mgl/90w2l/s1/1x1/2022-bmw-m5-cs-front-view.webp",
            "carStatus": "FREE"
        },
        {
            "id": 5,
            "mark": "BMW",
            "model": "M5",
            "rentPricePerHour": 11,
            "bookPricePerHour": 8.5,
            "imgUrl": "https://cdn.motor1.com/images/mgl/90w2l/s1/1x1/2022-bmw-m5-cs-front-view.webp",
            "carStatus": "FREE"
        },
        {
            "id": 6,
            "mark": "BMW",
            "model": "M5",
            "rentPricePerHour": 11,
            "bookPricePerHour": 8.5,
            "imgUrl": "https://cdn.motor1.com/images/mgl/90w2l/s1/1x1/2022-bmw-m5-cs-front-view.webp",
            "carStatus": "FREE"
        }
    ];

    useEffect(() => {
        // if (LocalStorage.getUserId()) {
        //     ApiService.fetchAvailableCars()
        //         .then(res => {
        //             setCars(res.data.carsDto);
        //         });
        // } else {
        //     ApiService.fetchFreeCars()
        //         .then(res => {
        //             setCars(res.data.carsDto);
        //         });
        // }
        setCars(sampleData);
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
        <>
            <div>
                {loading && <p>⏱⏱⏱⏱⏱</p>}
                {!loading && cars.map(c => <CarView key={c.id} car={c}
                                                    startRent={() => processOrderReducer(CarStatus.IN_RENT, c.id)}
                                                    startBook={() => processOrderReducer(CarStatus.IN_BOOKING, c.id)}
                                                    finishRide={() => processOrderReducer(CarStatus.FREE, c.id)}
                                                    pauseRent={() => processOrderReducer(CarStatus.IN_RENT_PAUSED, c.id)}
                                                    loading={loading}/>)}
            </div>
        </>
    );
}

export default CarsContainer;