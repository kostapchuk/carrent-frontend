import React, { FC } from 'react';

import shortid from 'shortid';

import { IRide } from '../../types/types';
import RideContainer from '../ride/RideContainer';

interface RidesViewProps {
  loading: boolean;
  rides: IRide[];
}

const RidesView: FC<RidesViewProps> = ({ loading, rides }) => (
  <div className="container">
    {loading && <p>⏰⏰⏰⏰⏰⏰</p>}
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {!loading &&
        rides.map((ride) => (
          <RideContainer key={shortid.generate()} ride={ride} />
        ))}
    </div>
  </div>
);

export default RidesView;
