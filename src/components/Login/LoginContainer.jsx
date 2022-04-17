import React, {useContext, useState} from 'react';
import LoginView from "./LoginView";
import LocalStorage from "../../storage/LocalStorage";
import {useNavigate} from "react-router-dom";
import ApiService from "../../api/ApiService";
import LoggedInContext from "../../context/LoggedInContext";

const LoginContainer = () => {

    const navigate = useNavigate();
    const {setLoggedIn} = useContext(LoggedInContext);
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
                setLoggedIn(true);
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