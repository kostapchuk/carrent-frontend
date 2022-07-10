import React, { FC, useState } from 'react';
import ApiService from '../../api/ApiService';
import UserView from './UserView';
import { IUser } from '../../types/types';

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

    const handleStatusChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setStatus(event.target.value);
    };

    const handleSave = () => {
        const userRequest = {
            ...user,
            role,
            verified,
            status,
        };
        ApiService.updateUser(userRequest)
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
            user={user}
            status={status}
            handleStatusChange={handleStatusChange}
            statuses={statuses}
            role={role}
            handleRoleChange={handleRoleChange}
            roles={roles}
            verified={verified}
            handleVerifiedChange={handleVerifiedChange}
            handleSave={handleSave}
        />
    );
};

export default UserContainer;
