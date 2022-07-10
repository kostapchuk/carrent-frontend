import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import CarView from './CarView';
import ApiService from '../../api/ApiService';
import { ICar } from '../../types/types';

// type CarContainerParams = {
//     id: string;
// };

const CarContainer: FC = () => {
    // const [car, setCar] = useState<ICar | null>(null);
    // const [loading, setLoading] = useState<boolean>(true);
    // const params = useParams<CarContainerParams>();

    // useEffect(() => {
    //     ApiService.fetchCarById(Number(params.id)).then((res: any) => {
    //         setCar(res.data);
    //         setLoading(false);
    //     });
    // }, [setCar, setLoading, params.id]);

    // todo: return <CarView car={car} loading={loading} />;
    return <div>To be done later...</div>;
};

export default CarContainer;
