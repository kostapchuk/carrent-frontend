import React, { FC } from 'react';

import shortid from 'shortid';

import { IRide } from '../../types/types';
import DetailsContainer from '../details/DetailsContainer';

interface RideViewProps {
  open: boolean;
  handleOpenClick: (event: React.MouseEvent) => void;
  ride: IRide;
}

const RideView: FC<RideViewProps> = ({ open, handleOpenClick, ride }) => (
  <div className="accordion-item" key={shortid.generate()}>
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button
        aria-expanded={open}
        className={`accordion-button ${open ? '' : 'collapsed'}`}
        onClick={handleOpenClick}
        type="button"
      >
        {ride.mark} {ride.model} {!!ride.date} {ride.totalPrice}${' '}
        {ride.totalTimeHours}
      </button>
    </h2>
    <div
      aria-labelledby="panelsStayOpen-headingOne"
      className={`accordion-collapse collapse ${open ? 'show' : ''}`}
    >
      <div className="accordion-body">
        <DetailsContainer details={ride.rideDetailsDtos} />
      </div>
    </div>
  </div>
);

export default RideView;
