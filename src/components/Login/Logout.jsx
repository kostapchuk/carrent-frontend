import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";
import ApiService from "../../api/ApiService";
import {useContext} from "react";
import LoggedInContext from "../../context/LoggedInContext";

const Logout = () => {

    const {loggedIn, setLoggedIn} = useContext(LoggedInContext);

    const handleClick = () => {
        LocalStorage.clearToken();
        LocalStorage.clearUserId();
        ApiService.logout();
        setLoggedIn(false);
    }

    return(
        loggedIn && <Link to="/" className="nav-link" onClick={handleClick}>Logout</Link>
    );
}

export default Logout;