import DetailsView from "./DetailsView";

const DetailsContainer = ({details}) => {
    return (
        details.map(d => <DetailsView detail={d}/>)
    );
}

export default DetailsContainer;