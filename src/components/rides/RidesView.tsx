import RideContainer from "../ride/RideContainer";
import shortid from "shortid";
import React, {FC} from "react";
import {IRide} from "../../types/types";

interface RidesViewProps {
    loading: boolean,
    rides: IRide[],
}

const RidesView: FC<RidesViewProps> = ({loading, rides}) => {
    return (
        <div className="container">
            {loading && <p>⏰⏰⏰⏰⏰⏰</p>}
            <div className="accordion">
                {rides.map(ride =>
                    <RideContainer
                        key={shortid.generate()}
                        ride={ride}
                    />)
                }
            </div>
        </div>
    )
}

export default RidesView;
