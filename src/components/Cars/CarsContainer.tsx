import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Car, Order, User } from '../../api/ApiService';
import { updateBalance } from '../../slices/BalanceSlice';
import { selectLoggedIn } from '../../slices/UserSlice';
import LocalStorage from '../../storage/LocalStorage';
import { CarStatus, ICar } from '../../types/types';
import CarView from './CarView';

const CarsContainer: FC = () => {
  const dispatch = useDispatch();

  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [update, setUpdate] = useState<boolean>(true);
  const loggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    if (loggedIn) {
      Car.fetchAvailableCars().then((data) => {
        setCars(data.carsDto);
      });
    } else {
      Car.fetchFreeCars().then((data) => {
        setCars(data.carsDto);
      });
    }
    setLoading(false);
  }, [loading, setCars, update, loggedIn]);

  const processOrderReducer = (status: CarStatus, carId: number) => {
    const order = {
      userId: LocalStorage.getUserId(),
      carId,
      carStatus: status,
    };
    Order.processOrder(order).then(() => {
      setUpdate(!update);
      if (status === CarStatus.FREE) {
        User.findBalance().then((data) => {
          dispatch(updateBalance(data));
        });
      }
    });
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {loading && <p>⏱⏱⏱⏱⏱</p>}
        {!loading &&
          cars.map((c) => (
            <CarView
              car={c}
              finishRide={() => processOrderReducer(CarStatus.FREE, c.id)}
              key={c.id}
              loading={loading}
              pauseRent={() =>
                processOrderReducer(CarStatus.IN_RENT_PAUSED, c.id)
              }
              startBook={() => processOrderReducer(CarStatus.IN_BOOKING, c.id)}
              startRent={() => processOrderReducer(CarStatus.IN_RENT, c.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default CarsContainer;
