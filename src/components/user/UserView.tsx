import React, { FC } from 'react';

import shortid from 'shortid';

import { IUser } from '../../types/types';

interface UserViewProps {
  user: IUser;
  status: string;
  handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  statuses: string[];
  role: string;
  handleRoleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  roles: string[];
  verified: boolean;
  handleVerifiedChange: () => void;
  handleSave: () => void;
}

const UserView: FC<UserViewProps> = ({
  user,
  status,
  handleStatusChange,
  statuses,
  role,
  handleRoleChange,
  roles,
  verified,
  handleVerifiedChange,
  handleSave,
}) => (
  <tr>
    <th scope="row">{user.id}</th>
    <td>
      {user.firstName} {user.lastName}
    </td>
    <td>
      <select
        aria-label={status}
        className="form-select"
        name="statuses"
        onChange={handleStatusChange}
        value={status}
      >
        {statuses.map((s) => (
          <option key={shortid.generate()} value={s}>
            {s}
          </option>
        ))}
      </select>
    </td>
    <td>
      <select
        aria-label={role}
        className="form-select"
        name="roles"
        onChange={handleRoleChange}
        value={role}
      >
        {roles.map((r) => (
          <option key={shortid.generate()} value={r}>
            {r}
          </option>
        ))}
      </select>
    </td>
    <td>
      {user.documentImg1 ? (
        <img alt="img doc 1" src={user.documentImg1} width={200} />
      ) : (
        'Not uploaded'
      )}
    </td>
    <td>
      {user.documentImg2 ? (
        <img alt="img doc 2" src={user.documentImg2} width={200} />
      ) : (
        'Not uploaded'
      )}
    </td>
    <td>
      <input
        defaultChecked={verified}
        onChange={handleVerifiedChange}
        type="checkbox"
      />
    </td>
    <td>
      <button className="btn btn-primary" onClick={handleSave} type="button">
        Save
      </button>
    </td>
  </tr>
);

export default UserView;
