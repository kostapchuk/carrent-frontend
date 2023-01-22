import React, {FC, useEffect, useState} from "react";
import RidesView from "./RidesView";
import {Ride} from "../../types/types";
import {useSelector} from "react-redux";
import {selectLoggedIn} from "../../slices/UserSlice";
import AuthApiService from "../../api/AuthApiService";

const RidesContainer: FC = () => {

    const [rides, setRides] = useState<Ride[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const loggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        if (loggedIn) {
            AuthApiService.retrieveRides()
                .then((res: any) => {
                    setRides(res.data);
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
