import React, {FC, useEffect, useState} from "react";
import UsersView from "./UsersView";
import {User} from "../../types/types";
import AuthApiService from "../../api/AuthApiService";

const UsersContainer: FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [roles, setRoles] = useState<string[]>([]);
    const [statuses, setStatuses] = useState<string[]>([]);

    const updateUsers = () => {
        AuthApiService.fetchUsers()
            .then((r: any) => {
                setUsers(r.data);
                setLoading(false);
            })
    }

    const updateMessage = (msg: string) => {
        setMessage(msg);
    }

    useEffect(() => {
        updateUsers()
        AuthApiService.fetchRoles()
            .then((r: any) => {
                setRoles(r.data);
            })
        AuthApiService.fetchStatuses()
            .then((r: any) => {
                setStatuses(r.data);
            })
    }, [setUsers, setRoles, setStatuses]);

    return (
        <UsersView loading={loading}
                   users={users}
                   roles={roles}
                   statuses={statuses}
                   updateUsers={updateUsers}
                   message={message}
                   updateMessage={updateMessage}
        />
    )
}

export default UsersContainer;
