import React, {FC, useEffect, useState} from "react";
import ApiService from "../../api/PublicApiService";
import {useSelector} from "react-redux";
import {Car} from "../../types/types";
import {selectLoggedIn} from "../../slices/UserSlice";
import CarsView from "./CarsView";
import AuthApiService from "../../api/ProtectedApiService";

const CarsContainer: FC = () => {

    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const loggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        const promise = (loggedIn ? AuthApiService.fetchAvailableCars() : ApiService.fetchFreeCars());
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
