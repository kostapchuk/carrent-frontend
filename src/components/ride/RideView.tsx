import shortid from 'shortid';
import {FC} from 'react';
import DetailsContainer from '../details/DetailsContainer';
import {IRide} from '../../types/types';
import React from 'react';

interface RideViewProps {
    open: boolean,
    handleOpenClick: (event: React.MouseEvent) => void,
    ride: IRide,
}

const RideView: FC<RideViewProps> = ({
                                         open,
                                         handleOpenClick,
                                         ride,
                                     }) => (
    <div
        key={shortid.generate()}
        className="accordion-item"
    >
        <h2
            className="accordion-header"
            id="panelsStayOpen-headingOne"
        >
            <button
                className={`accordion-button ${open ? '' : 'collapsed'}`}
                type="button"
                aria-expanded={open}
                onClick={handleOpenClick}
            >
                <>
                    {ride.mark}
                    {' '}
                    {ride.model}
                    {' '}
                    {ride.date}
                    {' '}
                    {ride.totalPrice}
                    $
                    {' '}
                    {ride.totalTimeHours}
                </>
            </button>
        </h2>
        <div
            className={`accordion-collapse collapse ${open ? 'show' : ''}`}
            aria-labelledby="panelsStayOpen-headingOne"
        >
            <div className="accordion-body">
                <DetailsContainer details={ride.details}/>
            </div>
        </div>
    </div>
);

export default RideView;
