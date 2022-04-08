import React, {useContext, useState} from 'react';
import RegisterView from "./LoginView";
import LocalStorage from "../../storage/LocalStorage";
import {useNavigate} from "react-router-dom";
import ApiService from "../../api/ApiService";
import LoggedInContext from "../../context/LoggedInContext";
import BalanceContext from "../../context/BalanceContext";

const LoginContainer = () => {

    const navigate = useNavigate();
    const {loggedIn, setLoggedIn} = useContext(LoggedInContext);
    const {balance, setBalance} = useContext(BalanceContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const credentials = {
            email,
            password
        }
        ApiService.login(credentials)
            .then(res => {
                LocalStorage.setToken(res.data.token);
                LocalStorage.setUserId(res.data.userId);
                setLoggedIn(true);
                console.log("after login: " + loggedIn);
                navigate('/cars');
            })
    }

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    }
    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    return (
        <RegisterView handleSubmit={handleSubmit} handleChangeEmail={handleChangeEmail}
                      handleChangePassword={handleChangePassword}/>
    );
};

export default LoginContainer;