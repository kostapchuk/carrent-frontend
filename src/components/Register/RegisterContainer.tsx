import {FC, useState} from 'react';
import RegisterView from "./RegisterView";
import {useNavigate} from "react-router-dom";
import ApiService from "../../api/ApiService";
import React = require('react');

const RegisterContainer: FC = () => {

    const navigate = useNavigate();
    const [formUser, setFormUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        ApiService.register(formUser)
            .then((res: any) =>
                navigate(
                    "/register-result",
                    {state: {success: res.data.success, message: res.data.message}}
                ))
            .catch((e: any) =>
                navigate("/register-result",
                    {state: {success: false, message: e.message}}
                ))
    }

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value}: { name: string; value: string } = event.target;
        setFormUser(prevFormUser => {
            return {
                ...prevFormUser,
                [name]: value
            }
        });
    }

    return (
        <RegisterView handleSubmit={handleSubmit} handleFormChange={handleFormChange} formUser={formUser}/>
    );
};

export default RegisterContainer;