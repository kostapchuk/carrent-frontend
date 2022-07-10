import { FC } from 'react';

import { ICar } from '../../types/types';
import CarCard from './CarCard';

export interface CarViewProps {
  car: ICar | null;
  startRent: () => void;
  startBook: () => void;
  finishRide: () => void;
  pauseRent: () => void;
  loading: boolean;
}

const CarView: FC<CarViewProps> = ({
  car,
  loading,
  startRent,
  startBook,
  finishRide,
  pauseRent,
}) =>
  loading ? (
    <p>⏰⏰⏰⏰⏰⏰</p>
  ) : (
    <div className="col">
      <CarCard
        car={car}
        finishRide={finishRide}
        pauseRent={pauseRent}
        startBook={startBook}
        startRent={startRent}
      />
    </div>
  );

export default CarView;
