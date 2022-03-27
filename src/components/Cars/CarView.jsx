import CarStatus from "../../utils/const";

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
                    <img src={car.imgUrl} alt="" width={'200px'}/>

                    {car.carStatus === CarStatus.FREE &&
                        <>
                            <button onClick={startRent}>startRent</button>
                            <button onClick={startBook}>startBook</button>
                        </>
                    }

                    {car.carStatus === CarStatus.IN_RENT &&
                        <>
                            <button onClick={pauseRent}>pauseRent</button>
                        </>
                    }

                    {car.carStatus === CarStatus.IN_BOOKING &&
                        <>
                            <button onClick={startRent}>startRent</button>
                        </>
                    }
                    {car.carStatus === CarStatus.IN_RENT_PAUSED &&
                        <>
                            <button onClick={startRent}>startRent</button>
                        </>
                    }

                    {(car.carStatus === CarStatus.IN_BOOKING || car.carStatus === CarStatus.IN_RENT ||
                        car.carStatus === CarStatus.IN_RENT_PAUSED)
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