import { Link } from 'react-router-dom';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CarStatus, ICar } from '../../types/types';
import { selectLoggedIn } from '../../slices/UserSlice';

export interface CarCardProps {
    car: ICar | null;
    startRent: () => void;
    startBook: () => void;
    finishRide: () => void;
    pauseRent: () => void;
}

const CarCard: FC<CarCardProps> = ({
    car,
    startRent,
    startBook,
    finishRide,
    pauseRent,
}) => {
    const loggedIn = useSelector(selectLoggedIn);

    return (
        <div className="card h-100">
            <Link to={`/cars/${car?.id}`}>
                <img className="card-img-top" src={car?.imgUrl} alt="" />
            </Link>
            <div className="card-body text-center d-flex flex-column">
                <h6 className="card-title">
                    {car?.mark} {car?.model}
                </h6>
                <div>
                    <p>
                        Rent{' '}
                        <span style={{ fontWeight: 'bolder' }}>
                            {car?.rentPricePerHour}
                        </span>{' '}
                        $/h
                    </p>
                </div>
                <div>
                    <p>
                        Book{' '}
                        <span style={{ fontWeight: 'bolder' }}>
                            {car?.bookPricePerHour}
                        </span>{' '}
                        $/h
                    </p>
                </div>

                {loggedIn && car?.carStatus === CarStatus.FREE && (
                    <div className="d-flex justify-content-center mt-auto">
                        <button
                            type="button"
                            className="btn btn-primary m-2 px-3"
                            onClick={startRent}
                        >
                            Rent
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary m-2 px-3"
                            onClick={startBook}
                        >
                            Book
                        </button>
                    </div>
                )}

                {loggedIn && car?.carStatus === CarStatus.IN_RENT && (
                    <button
                        type="button"
                        className="btn btn-primary m-2"
                        onClick={pauseRent}
                    >
                        PauseRent
                    </button>
                )}

                {loggedIn && car?.carStatus === CarStatus.IN_BOOKING && (
                    <button
                        type="button"
                        className="btn btn-primary m-2"
                        onClick={startRent}
                    >
                        Start Rent
                    </button>
                )}

                {loggedIn && car?.carStatus === CarStatus.IN_RENT_PAUSED && (
                    <button
                        type="button"
                        className="btn btn-primary m-2"
                        onClick={startRent}
                    >
                        Start Rent
                    </button>
                )}

                {loggedIn &&
                    (car?.carStatus === CarStatus.IN_BOOKING ||
                        car?.carStatus === CarStatus.IN_RENT ||
                        car?.carStatus === CarStatus.IN_RENT_PAUSED) && (
                        <button
                            type="button"
                            className="btn btn-primary m-2"
                            onClick={finishRide}
                        >
                            Finish Ride
                        </button>
                    )}
            </div>
        </div>
    );
};

export default CarCard;
