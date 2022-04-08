import CarStatus from "../../utils/const";
import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";

const CarView = ({car, loading, startRent, startBook, finishRide, pauseRent}) => {

    return (<>
            {loading && <p>⏰⏰⏰⏰⏰⏰</p>}
            {/* {!loading &&
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
            } */}
            


                <div className="row" style={{width: "500px"}}>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <Link to={"/cars/" + car.id}><img className="card-img-top" src={car.imgUrl} alt="" width={'450px'}/></Link>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{car.mark}</h5>
                                    <div className="d-flex justify-content-center small mb-2">
                                        <h5>{car.model}</h5>
                                    </div>
                                    <div>
                                        <p>CarRent Price: {car.rentPricePerHour} $</p>
                                    </div>
                                    <div>
                                        <p>CarBook Price: {car.bookPricePerHour} $</p>
                                    </div>
                                </div>
                            </div>
                    
                        {LocalStorage.getUserId() && car.carStatus === CarStatus.FREE &&
                            <>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary m-2" onClick={startRent}>Rent</button>
                                <button className="btn btn-primary m-2" onClick={startBook}>Book</button>
                            </div>
                            </>
                        }

                        {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_RENT &&
                            <>
                                <button className="btn btn-primary m-2" onClick={pauseRent}>pauseRent</button>
                            </>
                        }

                        {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_BOOKING &&
                            <>
                                <button className="btn btn-primary m-2" onClick={startRent}>startRent</button>
                            </>
                        }
                        {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_RENT_PAUSED &&
                            <>
                                <button className="btn btn-primary m-2" onClick={startRent}>startRent</button>
                            </>
                        }

                        {LocalStorage.getUserId() && (car.carStatus === CarStatus.IN_BOOKING ||
                                car.carStatus === CarStatus.IN_RENT || car.carStatus === CarStatus.IN_RENT_PAUSED)
                            &&
                            <>
                                <button className="btn btn-primary m-2" onClick={finishRide}>finishRide</button>
                            </>
                        }</div>
                    </div>
                </div>


        </>
    );
}

export default CarView;