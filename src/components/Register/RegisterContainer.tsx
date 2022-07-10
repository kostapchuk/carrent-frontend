import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../../api/ApiService';
import RegisterView from './RegisterView';

const RegisterContainer: FC = () => {
  const navigate = useNavigate();
  const [formUser, setFormUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    User.register(formUser)
      .then((data) =>
        navigate('/register-result', {
          state: {
            success: data.success,
            message: data.message,
          },
        })
      )
      .catch((e) =>
        navigate('/register-result', {
          state: { success: false, message: e.message },
        })
      );
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value }: { name: string; value: string } = event.target;
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      [name]: value,
    }));
  };

  return (
    <RegisterView
      formUser={formUser}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default RegisterContainer;
