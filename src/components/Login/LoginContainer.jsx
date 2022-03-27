import './Login.styles.css'
import axios from "axios";
import React, {useState} from 'react';
import RegisterView from "./LoginView";
import LocalStorage from "../../storage/LocalStorage";
import {useNavigate} from "react-router-dom";

const LoginContainer = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        axios.post(`http://localhost:8080/api/v1/auth/login`, {
            email, password
        }).then(res => {
            LocalStorage.setToken(res.data.token);
            LocalStorage.setUserId(res.data.userId);
            navigate('/cars');
        }).catch(e => {
            console.log(e)
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