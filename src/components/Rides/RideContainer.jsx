import shortid from "shortid";
import DetailsContainer from "./details/DetailsContainer";

const RideContainer = ({open, setOpen, ride, details}) => {

    return (
        <div key={shortid.generate()}
             className="accordion-item"
        >
            <h2 className="accordion-header"
                id="panelsStayOpen-headingOne"
            >
                <button className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                >
                    {ride.mark} {ride.model} {ride.date} {ride.totalPrice}$ {ride.totalTimeHours}h
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne"
                 className="accordion-collapse collapse show"
                 aria-labelledby="panelsStayOpen-headingOne"
            >
                <div className="accordion-body">
                    <DetailsContainer details={details}/>
                </div>
            </div>
        </div>
    );

}

export default RideContainer;