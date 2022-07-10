import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RouteNames } from '../../routes';
import {
  fetchBalance,
  selectBalance,
  useBalanceDispatch,
} from '../../slices/BalanceSlice';
import { selectAdmin, selectLoggedIn } from '../../slices/UserSlice';
import Logout from '../Login/Logout';
import PaypalButton from '../payment/PaypalButton';

const Header: FC = () => {
  const balance = useSelector(selectBalance);
  const loggedIn = useSelector(selectLoggedIn);
  const admin = useSelector(selectAdmin);
  const dispatch = useBalanceDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchBalance());
    }
  }, [balance, dispatch, loggedIn]);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/cars">
            CarRent
          </Link>
          <button
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {!loggedIn && (
                  <Link
                    aria-current="page"
                    className="nav-link"
                    to={RouteNames.REGISTER}
                  >
                    Register
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {!loggedIn && (
                  <Link className="nav-link" to={RouteNames.LOGIN}>
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={RouteNames.CARS}>
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                {loggedIn && (
                  <Link className="nav-link" to={RouteNames.DOCUMENTS}>
                    Documents
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {loggedIn && (
                  <Link className="nav-link" to={RouteNames.RIDES}>
                    History
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {loggedIn && <p className="nav-link"> {balance} $</p>}
              </li>
              <li className="nav-item">{loggedIn && <PaypalButton />}</li>
              <li className="nav-item">
                <Logout />
              </li>
              <li className="nav-item">
                {loggedIn && admin && (
                  <Link className="nav-link" to={RouteNames.ADMIN_USERS}>
                    Users
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
