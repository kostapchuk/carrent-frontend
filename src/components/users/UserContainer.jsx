import {useState} from "react";
import shortid from "shortid";
import ApiService from "../../api/ApiService";

const UserContainer = ({user, statuses, roles, updateUsers}) => {

    // todo: make it like one state

    const [verified, setVerified] = useState(user.verified);
    const [role, setRole] = useState(user.role);
    const [status, setStatus] = useState(user.status);
    const [updateResult, setUpdateResult] = useState('');

    const handleVerifiedChange = () => {
        setVerified(!verified);
    }

    const handeRoleChange = (event) => {
        setRole(event.target.value);
    }

    const handeStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleSave = () => {
        const userRequest = {
            ...user,
            role: role,
            verified: verified,
            status: status
        }
        ApiService.updateUser(userRequest)
            .then(r => {
                updateUsers();
                setUpdateResult("Successfully updated the user");
            })
            .catch(e => {
                setUpdateResult("Could not update the user");
            })
    }

    return (
        <>
            <p>{updateResult}</p>
            <span>{user.firstName} {user.lastName}</span>
            <select name="statuses" value={status} onChange={handeStatusChange}>
                {statuses.map(s => <option key={shortid.generate()} value={s}>{s}</option>)}
            </select>
            <select name="roles" value={role} onChange={handeRoleChange}>
                {roles.map(r => <option key={shortid.generate()} value={r}>{r}</option>)}
            </select>
            <input type={"checkbox"} defaultChecked={verified} onChange={handleVerifiedChange}/>
            {user.documentImg1 && <img src={user.documentImg1} alt={"img doc 1"} width={100}/>}
            {user.documentImg2 && <img src={user.documentImg2} alt={"img doc 2"} width={100}/>}
            <button onClick={handleSave}>Save</button>
            <br/>
        </>
    )
}

export default UserContainer;