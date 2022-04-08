import {useEffect, useState} from "react";
import ApiService from "../../api/ApiService";
import LocalStorage from "../../storage/LocalStorage";

const shortid = require('shortid');

const RidesContainer = () => {

    const [rides, setRides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (LocalStorage.getUserId()) {
            ApiService.retrieveRides()
                .then(res => {
                    setRides(res.data.rideDtos);
                    setLoading(false);
                })
        }
    }, [setRides, setLoading]);

    return (
        <>
            {loading && <p>⏰⏰⏰⏰⏰⏰</p>}
            {!loading && rides.map(r => {
                return <div key={shortid.generate()}>
                    <p>Mark: {r.mark}</p>
                    <p>Model: {r.model}</p>
                    <p>Date: {r.date}</p>
                    <p>Total price: {r.totalPrice} $</p>
                    <p>Total Time: {r.totalTimeHours} h</p>
                    {r.rideDetailsDtos.map(details => {
                        return <div key={shortid.generate()}>
                            <p>Start: {details.start}</p>
                            <p>End: {details.end}</p>
                            <p>Status: {details.status}</p>
                            <p>Price: {details.price} $</p>
                        </div>
                    })}
                    <h5 style={{color: "red"}}>ENDING</h5>
                </div>
            })}
        </>
    );
}

export default RidesContainer;