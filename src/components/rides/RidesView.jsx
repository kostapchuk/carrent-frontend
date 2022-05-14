import RideContainer from "../ride/RideContainer";
import shortid from "shortid";

const RidesView = ({loading, rides}) => {
    return (
        <div className="container">
            {loading && <p>⏰⏰⏰⏰⏰⏰</p>}
            <div
                className="accordion"
                id="accordionPanelsStayOpenExample"
            >
                {!loading && rides.map(ride =>
                    <RideContainer
                        ride={ride}
                        details={ride.rideDetailsDtos}
                        key={shortid.generate()}
                    />)
                }
            </div>
        </div>
    )
}

export default RidesView;