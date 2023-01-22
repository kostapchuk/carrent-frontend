import React, {FC, useState} from 'react';
import RegistrationView from "./RegistrationView";
import {useNavigate} from "react-router-dom";
import ApiService from "../../api/PublicApiService";

export interface RegistrationUser {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
}

const RegistrationContainer: FC = () => {

    const navigate = useNavigate();
    const [formUser, setFormUser] = useState<RegistrationUser>({
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
        <RegistrationView handleSubmit={handleSubmit} handleFormChange={handleFormChange} formUser={formUser}/>
    );
};

export default RegistrationContainer;
