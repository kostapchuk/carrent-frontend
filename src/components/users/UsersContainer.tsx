import { FC, useEffect, useState } from 'react';

import { User } from '../../api/ApiService';
import { IUser } from '../../types/types';
import UsersView from './UsersView';

const UsersContainer: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [roles, setRoles] = useState<string[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);

  const updateUsers = () => {
    User.fetchUsers().then((data) => {
      setUsers(data.userDtos);
      setLoading(false);
    });
  };

  const updateMessage = (msg: string) => {
    setMessage(msg);
  };

  useEffect(() => {
    updateUsers();
    User.fetchRoles().then((data) => {
      setRoles(data.roles);
    });
    User.fetchStatuses().then((data) => {
      setStatuses(data.statuses);
    });
  }, [setUsers, setRoles, setStatuses]);

  return (
    <UsersView
      loading={loading}
      message={message}
      roles={roles}
      statuses={statuses}
      updateMessage={updateMessage}
      updateUsers={updateUsers}
      users={users}
    />
  );
};

export default UsersContainer;
