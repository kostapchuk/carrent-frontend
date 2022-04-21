import React, {useState} from 'react';
import LoginView from "./LoginView";
import LocalStorage from "../../storage/LocalStorage";
import {useNavigate} from "react-router-dom";
import ApiService from "../../api/ApiService";
import {useDispatch} from "react-redux";
import {fetchBalance} from "../../slices/BalanceSlice";
import {updateLoggedIn} from "../../slices/LoggedInSlice";

const LoginContainer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formUser, setFormUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = event => {
        event.preventDefault();
        ApiService.login(formUser)
            .then(res => {
                LocalStorage.setToken(res.data.token);
                LocalStorage.setUserId(res.data.userId);
                dispatch(updateLoggedIn(true));
                dispatch(fetchBalance());
                navigate('/cars');
            })
    }

    const handleFormChange = event => {
        const {name, value} = event.target;
        setFormUser(prevFormUser => {
            return {
                ...prevFormUser,
                [name]: value
            }
        })
    }

    return (
        <LoginView handleSubmit={handleSubmit} handleFormChange={handleFormChange} formUser={formUser}/>
    );
};

export default LoginContainer;