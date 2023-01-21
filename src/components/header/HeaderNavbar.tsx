import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";
import {RouteNames} from "../../routes";
import PaypalButton from "../payment/PaypalButton";
import Logout from "../login/Logout";
import {useSelector} from "react-redux";
import {fetchBalance, selectBalance, useBalanceDispatch} from "../../slices/BalanceSlice";
import {selectAdmin, selectLoggedIn} from "../../slices/UserSlice";


const HeaderNavbar: FC = () => {

    const balance = useSelector(selectBalance);
    const loggedIn = useSelector(selectLoggedIn);
    const admin = useSelector(selectAdmin);
    const dispatch = useBalanceDispatch();

    useEffect(() => {
        if (loggedIn) {
            dispatch(fetchBalance());
        }
    }, [balance])
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {!loggedIn &&
                        <Link className="nav-link"
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
                <li className="nav-item">
                    {loggedIn && admin &&
                        <Link className="nav-link" to={RouteNames.ADMIN_USERS}>Users</Link>}
                </li>
            </ul>
        </div>
    );
};

export default HeaderNavbar;
