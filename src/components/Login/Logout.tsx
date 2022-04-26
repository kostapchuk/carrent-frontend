import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";
import ApiService from "../../api/ApiService";
import {useSelector} from "react-redux";
import {selectLoggedIn, updateLoggedIn, useUserDispatch} from "../../slices/UserSlice";
import React from 'react';

const Logout = () => {

    const dispatch = useUserDispatch();
    const loggedIn = useSelector(selectLoggedIn);

    const handleClick = () => {
        LocalStorage.clearToken();
        LocalStorage.clearUserId();
        ApiService.logout();
        dispatch(updateLoggedIn(false));
    }

    return (
        loggedIn && <Link to="/" className="nav-link" onClick={handleClick}>Logout</Link>
    );
}

export default Logout;