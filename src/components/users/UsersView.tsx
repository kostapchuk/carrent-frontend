import UserContainer from "../user/UserContainer";
import {FC} from "react";
import {IRole, IStatus, IUser} from "../../types/types";

interface UsersViewProps {
    loading: boolean,
    users: IUser[],
    roles: IRole[],
    statuses: IStatus[],
    updateUsers: () => void,
    message: string,
    updateMessage: (msg: string) => void,
}

const UsersView: FC<UsersViewProps> = ({
                                           loading,
                                           users,
                                           roles,
                                           statuses,
                                           updateUsers,
                                           message,
                                           updateMessage
                                       }) => {
    return (
        <div className="container">
            {loading
                ?
                <p>⏱⏱⏱⏱⏱</p>
                :
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
                        {users.map(u =>
                            <UserContainer key={u.id}
                                           user={u}
                                           roles={roles}
                                           statuses={statuses}
                                           updateUsers={updateUsers}
                                           updateMessage={updateMessage}
                            />
                        )}
                        </tbody>
                    </table>
                </>
            }
        </div>
    );
}

export default UsersView;