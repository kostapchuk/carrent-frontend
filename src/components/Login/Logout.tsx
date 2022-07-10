import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { User } from '../../api/ApiService';
import {
  selectLoggedIn,
  updateLoggedIn,
  useUserDispatch,
} from '../../slices/UserSlice';
import LocalStorage from '../../storage/LocalStorage';

const Logout: FC = () => {
  const dispatch = useUserDispatch();
  const loggedIn = useSelector(selectLoggedIn);

  const handleClick = () => {
    LocalStorage.clearToken();
    LocalStorage.clearUserId();
    User.logout();
    dispatch(updateLoggedIn(false));
  };

  return loggedIn ? (
    <Link className="nav-link" onClick={handleClick} to="/">
      Logout
    </Link>
  ) : (
    <div />
  );
};

export default Logout;
