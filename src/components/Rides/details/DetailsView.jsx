import shortid from "shortid";

const DetailsContainer = ({detail}) => {
    return (
        <div key={shortid.generate()}>
            <p>Start: {detail.start}</p>
            <p>End: {detail.end}</p>
            <p>Status: {detail.status}</p>
            <p>Price: {detail.price} $</p>
        </div>
    );
}

export default DetailsContainer;