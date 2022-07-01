import { Link } from 'react-router-dom';
import LocalStorage from '../../storage/LocalStorage';
import ApiService from '../../api/ApiService';
import {
    selectLoggedIn,
    updateLoggedIn,
    useUserDispatch,
} from '../../slices/UserSlice';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const Logout: FC = () => {
    const dispatch = useUserDispatch();
    const loggedIn = useSelector(selectLoggedIn);

    const handleClick = () => {
        LocalStorage.clearToken();
        LocalStorage.clearUserId();
        ApiService.logout();
        dispatch(updateLoggedIn(false));
    };

    return loggedIn ? (
        <Link to="/" className="nav-link" onClick={handleClick}>
            Logout
        </Link>
    ) : (
        <></>
    );
};

export default Logout;
