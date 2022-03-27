import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import CarView from "./CarView";
import ApiService from "../../api/ApiService";

const CarContainer = () => {

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        ApiService.fetchCarById(params.id)
            .then(res => {
                console.log(res.data);
                setCar(res.data);
                setLoading(false);
            })
    }, [setCar, setLoading, params.id]);

    return (
        <CarView car={car} loading={loading}/>
    );
}

export default CarContainer;