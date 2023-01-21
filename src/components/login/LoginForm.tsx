import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {ILoginUser} from "../../types/types";

interface LoginFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formUser: ILoginUser,
}

const LoginForm: FC<LoginFormProps> = ({handleSubmit, handleFormChange, formUser}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
                <input type="email"
                       className="form-control form-control-lg"
                       onChange={handleFormChange}
                       name="email"
                       value={formUser.email}
                       placeholder="Your Email"
                />
            </div>
            <div className="form-outline mb-4">
                <input type="password"
                       className="form-control form-control-lg"
                       onChange={handleFormChange}
                       name="password"
                       value={formUser.password}
                       placeholder="Password"
                />
            </div>
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">
                    Log In
                </button>
            </div>
            <div className="d-flex justify-content-center pt-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch"
                           id="flexSwitchCheckDefault"/>
                    <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault">
                        Remember me
                    </label>
                </div>
            </div>
            <p className="text-center text-muted mt-5 mb-0">Create new account
                <Link to="/register"
                      className="fw-bold text-body">
                    <u>Register here</u>
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;
