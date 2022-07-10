import { FC, useState } from 'react';

import { IRide } from '../../types/types';
import RideView from './RideView';

interface RideContainerProps {
  ride: IRide;
}

const RideContainer: FC<RideContainerProps> = ({ ride }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenClick = () => {
    setOpen(!open);
  };

  return <RideView handleOpenClick={handleOpenClick} open={open} ride={ride} />;
};

export default RideContainer;
