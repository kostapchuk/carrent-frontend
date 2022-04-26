import {FC, useState} from "react";
import RideView from "./RideView";
import {IRide} from "../../types/types";

interface RideContainerProps {
    ride: IRide,
}

const RideContainer: FC<RideContainerProps> = ({ride}) => {

    const [open, setOpen] = useState<boolean>(false);

    const handleOpenClick = () => {
        setOpen(!open);
    }

    return (
        <RideView open={open}
                  handleOpenClick={handleOpenClick}
                  ride={ride}/>
    );

}

export default RideContainer;