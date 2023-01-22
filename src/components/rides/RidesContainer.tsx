import React, {FC, useEffect, useState} from "react";
import ApiService from "../../api/ApiService";
import RidesView from "./RidesView";
import {IRide} from "../../types/types";
import {useSelector} from "react-redux";
import {selectLoggedIn} from "../../slices/UserSlice";

const RidesContainer: FC = () => {

    const [rides, setRides] = useState<IRide[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const loggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        if (loggedIn) {
            ApiService.retrieveRides()
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
