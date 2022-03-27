import { Link } from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";
import Logout from "../Login/Logout";

const Header = () => {
    return(
        <div>
            {!LocalStorage.getUserId() && <Link to="/register">Register | </Link>}
            {!LocalStorage.getUserId() && <Link to="/">Login | </Link>}
            <Logout/>
            <Link to="/cars">Cars</Link> |{" "}
            <p>Balance: $</p>
            <p style={{color: "red"}}>header ends here TYT</p>
        </div>
    );
}

export default Header;