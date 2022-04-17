import {useEffect, useState} from "react";
import ApiService from "../../api/ApiService";
import LocalStorage from "../../storage/LocalStorage";
import RideContainer from "./RideContainer";

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
        <div className="container">
            {loading && <p>⏰⏰⏰⏰⏰⏰</p>}
            <div
                className="accordion"
                id="accordionPanelsStayOpenExample"
            >
                {!loading && rides.map(ride =>
                    <RideContainer
                        ride={ride}
                        details={ride.rideDetailsDtos}
                    />)
                }
            </div>
        </div>
    );
}

export default RidesContainer;