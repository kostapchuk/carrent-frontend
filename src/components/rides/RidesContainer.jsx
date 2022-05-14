import {useEffect, useState} from "react";
import ApiService from "../../api/ApiService";
import LocalStorage from "../../storage/LocalStorage";
import RidesView from "./RidesView";

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
        <RidesView rides={rides}
                   loading={loading}
        />
    );
}

export default RidesContainer;