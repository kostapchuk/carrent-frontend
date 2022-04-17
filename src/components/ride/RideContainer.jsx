import {useState} from "react";
import RideView from "./RideView";

const RideContainer = ({ride, details}) => {

    const [open, setOpen] = useState(false);

    const handleOpenClick = () => {
        setOpen(!open);
    }

    return (
        <RideView open={open}
                  handleOpenClick={handleOpenClick}
                  ride={ride}
                  details={details}/>
    );

}

export default RideContainer;