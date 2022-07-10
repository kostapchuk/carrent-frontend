import { FC, useEffect, useState } from 'react';

import { User } from '../../api/ApiService';
import LocalStorage from '../../storage/LocalStorage';
import { IRide } from '../../types/types';
import RidesView from './RidesView';

const RidesContainer: FC = () => {
  const [rides, setRides] = useState<IRide[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (LocalStorage.getUserId()) {
      User.retrieveRides().then((data) => {
        setRides(data.rideDtos);
        setLoading(false);
      });
    }
  }, [setRides, setLoading]);

  return <RidesView loading={loading} rides={rides} />;
};

export default RidesContainer;
