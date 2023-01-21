import React, {FC, useEffect, useState} from "react";
import ApiService from "../../api/ApiService";
import {useSelector} from "react-redux";
import {ICar} from "../../types/types";
import {selectLoggedIn} from "../../slices/UserSlice";
import CarsView from "./CarsView";

const CarsContainer: FC = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const loggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        const promise = (loggedIn ? ApiService.fetchAvailableCars() : ApiService.fetchFreeCars());
        promise.then((res: any) => {
            setCars(res.data);
            setLoading(false);
        });
    }, [loading, setCars, loggedIn]);

    return (
        <CarsView cars={cars} loading={loading}/>
    );
}

export default CarsContainer;
