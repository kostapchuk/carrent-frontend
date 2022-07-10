import { FC } from 'react';

import { IUser } from '../../types/types';
import UserContainer from '../user/UserContainer';

interface UsersViewProps {
  loading: boolean;
  users: IUser[];
  roles: string[];
  statuses: string[];
  updateUsers: () => void;
  message: string;
  updateMessage: (msg: string) => void;
}

const UsersView: FC<UsersViewProps> = ({
  loading,
  users,
  roles,
  statuses,
  updateUsers,
  message,
  updateMessage,
}) => (
  <div className="container">
    {loading ? (
      <p>⏱⏱⏱⏱⏱</p>
    ) : (
      <>
        {message && <p>{message}</p>}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First & Last Names</th>
              <th scope="col">Status</th>
              <th scope="col">Role</th>
              <th scope="col">Img 1</th>
              <th scope="col">Img 2</th>
              <th scope="col">Verification</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <UserContainer
                key={u.id}
                roles={roles}
                statuses={statuses}
                updateMessage={updateMessage}
                updateUsers={updateUsers}
                user={u}
              />
            ))}
          </tbody>
        </table>
      </>
    )}
  </div>
);

export default UsersView;
