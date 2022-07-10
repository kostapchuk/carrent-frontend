import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../../api/ApiService';
import { fetchBalance, useBalanceDispatch } from '../../slices/BalanceSlice';
import { updateAdmin, updateLoggedIn } from '../../slices/UserSlice';
import LocalStorage from '../../storage/LocalStorage';
import LoginView from './LoginView';

const LoginContainer: FC = () => {
  const navigate = useNavigate();
  const dispatch = useBalanceDispatch();
  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    User.login(formUser).then((data) => {
      LocalStorage.setToken(data.token);
      LocalStorage.setUserId(data.userId);
      dispatch(updateLoggedIn(true));
      dispatch(updateAdmin(data.role === 'ADMIN'));
      dispatch(fetchBalance());
      navigate('/cars');
    });
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      [name]: value,
    }));
  };

  return (
    <LoginView
      formUser={formUser}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
