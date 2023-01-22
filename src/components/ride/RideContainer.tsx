import React, {FC, useState} from "react";
import RideView from "./RideView";
import {IRide} from "../../types/types";

interface RideContainerProps {
    ride: IRide,
}

const RideContainer: FC<RideContainerProps> = ({ride}) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <RideView open={open}
                  handleOpenClick={() => setOpen(!open)}
                  ride={ride}/>
    );

}

export default RideContainer;
