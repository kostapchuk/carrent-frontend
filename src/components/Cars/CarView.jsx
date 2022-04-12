import CarStatus from "../../utils/const";
import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";


const CarView = ({car, loading, startRent, startBook, finishRide, pauseRent}) => {

    return (<>
            {loading && <p>⏰⏰⏰⏰⏰⏰</p>}

            <div className="row col-sm-4 justify-content-center">
                <div className="card" style={{width: "19rem", height: "550px", margin: "70px 0 30px 0"}}>
                    <Link to={"/cars/" + car.id}><img className="card-img-top" src={car.imgUrl} alt="" style={{height:"100%", width:"100%", margin: "10px 0 0 0", objectFit: "cover"}}/></Link>
                    <div className="card-body text-center d-flex flex-column">
                        <h5 className="card-title">{car.mark}</h5>
                        <p className="card-text">{car.model}</p>
                            <div>
                                <p>Rent <span style={{fontWeight: "bolder"}}>{car.rentPricePerHour}</span> $/h</p>
                            </div>
                            <div>
                                <p>Book <span style={{fontWeight: "bolder"}}>{car.bookPricePerHour}</span> $/h</p>
                            </div>
                            

                            <div className="d-flex justify-content-center mt-auto">
                                <button className="btn btn-primary m-2 px-3" onClick={startRent}>Rent</button>
                                <button className="btn btn-primary m-2 px-3" onClick={startBook}>Book</button>
                            </div>


                        {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_RENT &&
                            <>
                                <button className="btn btn-primary m-2" onClick={pauseRent}>PauseRent</button>
                            </>
                        }

                        {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_BOOKING &&
                            <>
                                <button className="btn btn-primary m-2" onClick={startRent}>Start Rent</button>
                            </>
                        }

                        {LocalStorage.getUserId() && car.carStatus === CarStatus.IN_RENT_PAUSED &&
                            <>
                                <button className="btn btn-primary m-2" onClick={startRent}>Start Rent</button>
                            </>
                        }

                        {LocalStorage.getUserId() && (car.carStatus === CarStatus.IN_BOOKING ||
                                car.carStatus === CarStatus.IN_RENT || car.carStatus === CarStatus.IN_RENT_PAUSED)
                            &&
                            <>
                                <button className="btn btn-primary m-2" onClick={finishRide}>Finish Ride</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarView;