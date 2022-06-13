import React from 'react'
import AddCarView from './AddCarView';
import {FC, useState} from 'react';
import LocalStorage from "../../storage/LocalStorage";
import {useNavigate} from "react-router-dom";
import ApiService from "../../api/ApiService";
import {fetchBalance, useBalanceDispatch} from "../../slices/BalanceSlice";
import {updateAdmin, updateLoggedIn} from "../../slices/UserSlice";

const AddCarContainer: FC = () => {

    const navigate = useNavigate();
    const dispatch = useBalanceDispatch();
    const [formUser, setFormUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        ApiService.login(formUser)
            .then((res: any) => {
                LocalStorage.setToken(res.data.token);
                LocalStorage.setUserId(res.data.userId);
                dispatch(updateLoggedIn(true));
                dispatch(updateAdmin(res.data.role === 'ADMIN'));
                dispatch(fetchBalance());
                navigate('/cars');
            })
    }

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        setFormUser(prevFormUser => {
            return {
                ...prevFormUser,
                [name]: value
            }
        })
    }

    return (
        <AddCarView handleSubmit={handleSubmit} handleFormChange={handleFormChange} formUser={formUser}/>
    );
};



export default AddCarContainer;