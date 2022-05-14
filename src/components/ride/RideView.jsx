import shortid from "shortid";
import DetailsContainer from "../details/DetailsContainer";

const RideView = ({
                      open,
                      handleOpenClick,
                      ride,
                      details
                  }) => {
    return (
        <div key={shortid.generate()}
             className="accordion-item"
        >
            <h2 className="accordion-header"
                id="panelsStayOpen-headingOne"
            >
                <button className={`accordion-button ${open ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={open}
                        onClick={handleOpenClick}
                >
                    {ride.mark} {ride.model} {ride.date} {ride.totalPrice}$ {ride.totalTimeHours}h
                </button>
            </h2>
            <div className={`accordion-collapse collapse ${open ? "show" : ""}`}
                 aria-labelledby="panelsStayOpen-headingOne"
            >
                <div className="accordion-body">
                    <DetailsContainer details={details}/>
                </div>
            </div>
        </div>
    )
}

export default RideView;