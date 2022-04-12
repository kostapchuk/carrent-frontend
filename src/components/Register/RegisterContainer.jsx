import React, {useState} from 'react';
import RegisterView from "./RegisterView";
import {useNavigate} from "react-router-dom";
import ApiService from "../../api/ApiService";

const RegisterContainer = () => {

    const navigate = useNavigate();
    const [formUser, setFormUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    })

    const handleSubmit = event => {
        event.preventDefault();
        ApiService.register(formUser)
            .then(res => navigate("/register-result", {state: {success: res.data.success, message: res.data.message}}))
            .catch(e => navigate("/register-result", {state: {success: false, message: e.message}}))
    }

    const handleFormChange = event => {
        const {name, value} = event.target;
        setFormUser(prevFormUser => {
            return {
                ...prevFormUser,
                [name]: value
            }
        });
    }

    return (
        <RegisterView handleSubmit={handleSubmit} handleFormChange={handleFormChange}/>
    );
};

export default RegisterContainer;