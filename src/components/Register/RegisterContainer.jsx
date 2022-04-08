import React, {useState} from 'react';
import RegisterView from "./RegisterView";
import {useNavigate} from "react-router-dom";
import ApiService from "../../api/ApiService";

const RegisterContainer = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            firstName,
            lastName,
            phone,
            email,
            password,
        }
        ApiService.register(user)
            .then(res => {
                navigate("/register-result", {state: {success: res.data.success, message: res.data.message}});
            }).catch(e => {
                navigate("/register-result", {state: {success: false, message: e.message}});
            })
    }

    const handleChangeFirstName = event => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = event => {
        setLastName(event.target.value);
    }

    const handleChangePhone = event => {
        setPhone(event.target.value);
    }

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    }
    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    return (
        <>
            <RegisterView handleSubmit={handleSubmit} handleChangeFirstName={handleChangeFirstName}
                          handleChangeLastName={handleChangeLastName} handleChangePhone={handleChangePhone}
                          handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword}/>
        </>
    );
};

export default RegisterContainer;