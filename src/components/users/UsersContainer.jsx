import {useEffect, useState} from "react";
import ApiService from "../../api/ApiService";
import UserContainer from "./UserContainer";

const UsersContainer = () => {

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
        <>
            <div>
                {loading && <p>⏱⏱⏱⏱⏱</p>}
                {!loading && users.map(u => <UserContainer key={u.id} user={u} roles={roles} statuses={statuses}
                                                           updateUsers={updateUsers}/>)}
            </div>
        </>
    )
}

export default UsersContainer;