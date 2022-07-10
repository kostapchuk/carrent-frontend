import { Link } from 'react-router-dom';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import LocalStorage from '../../storage/LocalStorage';
import ApiService from '../../api/ApiService';
import {
    selectLoggedIn,
    updateLoggedIn,
    useUserDispatch,
} from '../../slices/UserSlice';

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
        <div />
    );
};

export default Logout;
