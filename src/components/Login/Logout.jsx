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
        LocalStorage.getUserId() && <Link to="/" onClick={handleClick}>Logout | </Link>
    );
}

export default Logout;