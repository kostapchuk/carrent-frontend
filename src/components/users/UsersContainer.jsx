import {useEffect, useState} from "react";
import ApiService from "../../api/ApiService";
import UsersView from "./UsersView";

const UsersContainer = () => {

    // todo: make it like one state

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [roles, setRoles] = useState([]);
    const [statuses, setStatuses] = useState([]);

    const updateUsers = () => {
        ApiService.fetchUsers()
            .then(r => {
                setUsers(r.data.userDtos);
                setLoading(false);
            })
    }

    useEffect(() => {
        updateUsers()
        ApiService.fetchRoles()
            .then(r => {
                setRoles(r.data.roles);
            })
        ApiService.fetchStatuses()
            .then(r => {
                setStatuses(r.data.statuses);
            })
    }, [setUsers, setRoles, setStatuses]);

    return (
        <UsersView loading={loading}
                   users={users}
                   roles={roles}
                   statuses={statuses}
                   updateUsers={updateUsers}
        />
    )
}

export default UsersContainer;