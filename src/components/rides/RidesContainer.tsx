import { FC, useEffect, useState } from 'react';
import ApiService from '../../api/ApiService';
import LocalStorage from '../../storage/LocalStorage';
import RidesView from './RidesView';
import { IRide } from '../../types/types';

const RidesContainer: FC = () => {
    const [rides, setRides] = useState<IRide[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (LocalStorage.getUserId()) {
            ApiService.retrieveRides().then((res: any) => {
                setRides(res.data.rideDtos);
                setLoading(false);
            });
        }
    }, [setRides, setLoading]);

    return <RidesView rides={rides} loading={loading} />;
};

export default RidesContainer;
