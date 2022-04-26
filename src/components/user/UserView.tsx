import shortid from "shortid";
import {IRole, IStatus, IUser} from "../../types/types";
import {FC} from "react";
import React = require("react");

interface UserViewProps {
    user: IUser,
    status: string,
    handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    statuses: IStatus[],
    role: string,
    handleRoleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    roles: IRole[],
    verified: boolean,
    handleVerifiedChange: () => void,
    handleSave: () => void,
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
                                     }) => {
    return (
        <>
            <tr>
                <th scope="row">{user.id}</th>
                <td>{user.firstName} {user.lastName}</td>
                <td>
                    <select name="statuses"
                            value={status}
                            onChange={handleStatusChange}
                            className="form-select"
                            aria-label={status}
                    >
                        {statuses.map(s =>
                            <option key={shortid.generate()}
                                    value={s.name}>
                                {s.name}
                            </option>
                        )}
                    </select>
                </td>
                <td>
                    <select name="roles"
                            value={role}
                            onChange={handleRoleChange}
                            className="form-select"
                            aria-label={role}
                    >
                        {roles.map(r =>
                            <option key={shortid.generate()}
                                    value={r.name}>
                                {r.name}
                            </option>
                        )}
                    </select>
                </td>
                <td>
                    {user.documentImg1
                        ? <img src={user.documentImg1}
                               alt={"img doc 1"}
                               width={200}/>
                        : "Not uploaded"}
                </td>
                <td>
                    {user.documentImg2
                        ? <img src={user.documentImg2}
                               alt={"img doc 2"}
                               width={200}/>
                        : "Not uploaded"}
                </td>
                <td>
                    <input type={"checkbox"}
                           defaultChecked={verified}
                           onChange={handleVerifiedChange}
                    />
                </td>
                <td>
                    <button type="button"
                            className="btn btn-primary"
                            onClick={handleSave}
                    >
                        Save
                    </button>
                </td>
            </tr>
        </>

    );
}

export default UserView;