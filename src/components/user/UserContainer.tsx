import React, { FC, useState } from 'react';

import { User } from '../../api/ApiService';
import { IUser } from '../../types/types';
import UserView from './UserView';

interface UserContainerProps {
  user: IUser;
  statuses: string[];
  roles: string[];
  updateUsers: () => void;
  updateMessage: (msg: string) => void;
}

const UserContainer: FC<UserContainerProps> = ({
  user,
  statuses,
  roles,
  updateUsers,
  updateMessage,
}) => {
  const [verified, setVerified] = useState<boolean>(user.verified);
  const [role, setRole] = useState<string>(user.role);
  const [status, setStatus] = useState<string>(user.status);

  const handleVerifiedChange = () => {
    setVerified(!verified);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleSave = () => {
    const userRequest = {
      ...user,
      role,
      verified,
      status,
    };
    User.updateUser(userRequest)
      .then(() => {
        updateUsers();
        updateMessage('Successfully updated the user');
      })
      .catch(() => {
        updateMessage('Could not update the user');
      });
  };

  return (
    <UserView
      handleRoleChange={handleRoleChange}
      handleSave={handleSave}
      handleStatusChange={handleStatusChange}
      handleVerifiedChange={handleVerifiedChange}
      role={role}
      roles={roles}
      status={status}
      statuses={statuses}
      user={user}
      verified={verified}
    />
  );
};

export default UserContainer;
