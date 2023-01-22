import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";
import {selectLoggedIn, updateLoggedIn, useUserDispatch} from "../../slices/UserSlice";
import React, {FC} from 'react';
import {useSelector} from "react-redux";

const Logout: FC = () => {

    const dispatch = useUserDispatch();
    const loggedIn = useSelector(selectLoggedIn);

    const handleClick = () => {
        LocalStorage.clearToken();
        LocalStorage.clearUserId();
        dispatch(updateLoggedIn(false));
    }

    return (
        loggedIn ? <Link to="/" className="nav-link" onClick={handleClick}>Logout</Link> : <></>
    );
}

export default Logout;
