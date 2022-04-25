import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";
import ApiService from "../../api/ApiService";
import {useDispatch, useSelector} from "react-redux";
import {selectLoggedIn, updateLoggedIn} from "../../slices/UserSlice";

const Logout = () => {

    const dispatch = useDispatch();
    const loggedIn = useSelector(selectLoggedIn);

    const handleClick = () => {
        LocalStorage.clearToken();
        LocalStorage.clearUserId();
        ApiService.logout();
        dispatch(updateLoggedIn(false));
    }

    return(
        loggedIn && <Link to="/" className="nav-link" onClick={handleClick}>Logout</Link>
    );
}

export default Logout;