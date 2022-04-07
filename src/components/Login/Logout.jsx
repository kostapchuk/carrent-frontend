import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";
import ApiService from "../../api/ApiService";

const Logout = () => {

    const handleClick = () => {
        LocalStorage.clearToken();
        LocalStorage.clearUserId();
        ApiService.logout();
    }

    return(
        <Link to="/" className="nav-link" onClick={handleClick}>Logout</Link>
    );
}

export default Logout;