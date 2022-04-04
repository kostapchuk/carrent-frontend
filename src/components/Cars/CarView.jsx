import CarStatus from "../../utils/const";
import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";

const CarView = ({car, loading, startRent, startBook, finishRide, pauseRent}) => {

    return (
        <div>
            {loading && <p>⏰⏰⏰⏰⏰⏰</p>}
            {!loading &&
                <>
                    <p>id: {car.id}</p>
                    <p>mark: {car.mark}</p>
                    <p>model: {car.model}</p>
                    <p>rentPricePerHour: {car.rentPricePerHour} $</p>
                    <p>bookPricePerHour: {car.bookPricePerHour} $</p>
                    <Link to={"/cars/" + car.id}><img src={car.imgUrl} alt="" width={'200px'}/></Link>

                    {LocalStorage.getUserId() && car.carStatus === CarStatus.FREE &&
                        <>
                            <button onClick={startRent}>startRent</button>
                            <button onClick={startBook}>startBook</button>
                        </>
                    }

                    {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_RENT &&
                        <>
                            <button onClick={pauseRent}>pauseRent</button>
                        </>
                    }

                    {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_BOOKING &&
                        <>
                            <button onClick={startRent}>startRent</button>
                        </>
                    }
                    {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_RENT_PAUSED &&
                        <>
                            <button onClick={startRent}>startRent</button>
                        </>
                    }

                    {LocalStorage.getUserId() && (car.carStatus === CarStatus.IN_BOOKING ||
                            car.carStatus === CarStatus.IN_RENT || car.carStatus === CarStatus.IN_RENT_PAUSED)
                        &&
                        <>
                            <button onClick={finishRide}>finishRide</button>
                        </>
                    }
                </>
            }
            <h1>----------------------</h1>
        </div>
    );
}

export default CarView;