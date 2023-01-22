import React, {FC} from "react";
import {Car, CarStatus} from "../../types/types";
import {useSelector} from "react-redux";
import {selectLoggedIn} from "../../slices/UserSlice";

export interface CarCardProps {
    car: Car,
    startRent: () => void,
    startBook: () => void,
    finishRide: () => void,
    pauseRent: () => void,
}

const CarView: FC<CarCardProps> = ({
                                       car,
                                       startRent,
                                       startBook,
                                       finishRide,
                                       pauseRent,
                                   }) => {
    const loggedIn = useSelector(selectLoggedIn);

    const carFree = loggedIn && car.carStatus === CarStatus.FREE;
    const carInRent = loggedIn && car.carStatus === CarStatus.IN_RENT;
    const carInBooking = loggedIn && car.carStatus === CarStatus.IN_BOOKING;
    const carInRentPaused = loggedIn && car.carStatus === CarStatus.IN_RENT_PAUSED;
    const carIsReadyToFinish = loggedIn && car.carStatus === CarStatus.IN_BOOKING ||
        car.carStatus === CarStatus.IN_RENT || car.carStatus === CarStatus.IN_RENT_PAUSED;

    return (
        <div className="card h-100">
            <img className="card-img-top" src={car.imgUrl} alt="Car's image"/>
            <div className="card-body text-center d-flex flex-column">
                <h6 className="card-title">{car.mark} {car.model}</h6>
                <div>
                    <p>Rent <span style={{fontWeight: "bolder"}}>{car.rentPricePerHour}</span> $/h</p>
                </div>
                <div>
                    <p>Book <span style={{fontWeight: "bolder"}}>{car.bookPricePerHour}</span> $/h</p>
                </div>
                {carFree &&
                    <div className="d-flex justify-content-center mt-auto">
                        <button className="btn btn-primary m-2 px-3" onClick={startRent}>Rent</button>
                        <button className="btn btn-outline-primary m-2 px-3" onClick={startBook}>Book</button>
                    </div>
                }
                {carInRent &&
                    <button className="btn btn-primary m-2" onClick={pauseRent}>PauseRent</button>
                }
                {carInBooking &&
                    <button className="btn btn-primary m-2" onClick={startRent}>Start Rent</button>
                }
                {carInRentPaused &&
                    <button className="btn btn-primary m-2" onClick={startRent}>Start Rent</button>
                }
                {carIsReadyToFinish &&
                    <button className="btn btn-primary m-2" onClick={finishRide}>Finish Ride</button>
                }
            </div>
        </div>
    )
}

export default CarView;
