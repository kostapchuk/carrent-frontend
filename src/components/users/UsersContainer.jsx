import {useEffect, useState} from "react";
import ApiService from "../../api/ApiService";

const UsersContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        ApiService.fetchUsers()
            .then(r => {
                setUsers(r.data.userDtos);
                console.log(r.data.userDtos);
            });

    }, [setUsers])

    const handleOnClick = (event) => {
        event.preventDefault();
    }

    return (
        <>
            {users.map(u =>
                <div key={u.id}>
                    <input type={"text"} value={u.firstName}/>
                    <input type={"text"} value={u.lastName}/>
                    <input type={"checkbox"} defaultChecked={u.verified}/>
                    {u.documentImg1 && <img src={u.documentImg1} alt={"img doc 1"} width={100}/>}
                    {u.documentImg2 && <img src={u.documentImg2} alt={"img doc 2"} width={100}/>}
                    <button data-id={u.id} type={"submit"} onClick={handleOnClick}>Update</button>
                </div>
            )}
        </>
    )
}

export default UsersContainer;