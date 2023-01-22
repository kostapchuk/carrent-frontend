import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {RegistrationUser} from "./RegistrationContainer";

interface RegistrationFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formUser: RegistrationUser,
}

const RegistrationForm: FC<RegistrationFormProps> = ({handleSubmit, handleFormChange, formUser}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
                <input type="text"
                       className="form-control form-control-lg"
                       onChange={handleFormChange}
                       name="firstName"
                       value={formUser.firstName}
                       placeholder="First Name"
                />
            </div>
            <div className="form-outline mb-4">
                <input type="text"
                       className="form-control form-control-lg"
                       onChange={handleFormChange}
                       name="lastName"
                       value={formUser.lastName}
                       placeholder="Last Name"
                />
            </div>
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
            <div className="form-outline mb-4">
                <input type="text"
                       className="form-control form-control-lg"
                       onChange={handleFormChange}
                       name="phone"
                       value={formUser.phone}
                       placeholder="Phone"
                />
            </div>
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">
                    Register
                </button>
            </div>
            <p className="text-center text-muted mt-5 mb-0">
                Have already an account?
                <Link to="/login" className="fw-bold text-body">
                    <u>Login here</u>
                </Link>
            </p>
        </form>
    );
};

export default RegistrationForm;
