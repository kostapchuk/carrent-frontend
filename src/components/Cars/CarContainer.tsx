import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import CarView from "./CarView";
import ApiService from "../../api/ApiService";
import {ICar} from "../../types/types";
import React from 'react';

type CarContainerParams = {
    id: string,
}

const CarContainer: FC = () => {

    const [car, setCar] = useState<ICar | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams<CarContainerParams>();

    useEffect(() => {
        ApiService.fetchCarById(params.id)
            .then((res: any) => {
                setCar(res.data);
                setLoading(false);
            })
    }, [setCar, setLoading, params.id]);

    return (
        <CarView car={car}
                 loading={loading}
        />
    );
}

export default CarContainer;