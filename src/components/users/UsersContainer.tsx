import React, {FC, useEffect, useState} from "react";
import ApiService from "../../api/ApiService";
import UsersView from "./UsersView";
import {IUser} from "../../types/types";

const UsersContainer: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [roles, setRoles] = useState<string[]>([]);
    const [statuses, setStatuses] = useState<string[]>([]);

    const updateUsers = () => {
        ApiService.fetchUsers()
            .then((r: any) => {
                setUsers(r.data.userDtos);
                setLoading(false);
            })
    }

    const updateMessage = (msg: string) => {
        setMessage(msg);
    }

    useEffect(() => {
        updateUsers()
        ApiService.fetchRoles()
            .then((r: any) => {
                setRoles(r.data.roles);
            })
        ApiService.fetchStatuses()
            .then((r: any) => {
                setStatuses(r.data.statuses);
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
