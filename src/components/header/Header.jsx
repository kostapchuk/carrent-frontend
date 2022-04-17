import {Link} from "react-router-dom";
import Logout from "../Login/Logout";
import {useContext} from "react";
import LoggedInContext from "../../context/LoggedInContext";
import BalanceContext from "../../context/BalanceContext";
import {RouteNames} from "../../routes";
import PaypalButton from "../payment/PaypalButton";

const Header = () => {

    const {loggedIn} = useContext(LoggedInContext);
    const {balance} = useContext(BalanceContext);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/cars">CarRent</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {!loggedIn &&
                                    <Link className="nav-link"
                                          aria-current="page"
                                          to={RouteNames.REGISTER}
                                    >
                                        Register
                                    </Link>
                                }
                            </li>
                            <li className="nav-item">
                                {!loggedIn &&
                                    <Link className="nav-link"
                                          to={RouteNames.LOGIN}
                                    >
                                        Login
                                    </Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={RouteNames.CARS}>Cars</Link>
                            </li>
                            <li className="nav-item">
                                {loggedIn && <Link className="nav-link" to={RouteNames.DOCUMENTS}>Documents</Link>}
                            </li>
                            <li className="nav-item">
                                {loggedIn && <Link className="nav-link" to={RouteNames.RIDES}>History</Link>}
                            </li>
                            <li className="nav-item">
                                {loggedIn && <p className="nav-link"> {balance} $</p>}
                            </li>
                            <li className="nav-item">
                                {loggedIn && <PaypalButton/>}
                            </li>
                            <li className="nav-item">
                                <Logout/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;