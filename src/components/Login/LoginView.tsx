import {Link} from 'react-router-dom';
import {FC} from "react";
import React from 'react';

interface LoginViewProps {
    handleSubmit: (event: React.FormEvent) => void,
    handleFormChange: (event: React.ChangeEvent) => void,
    formUser,
}

const LoginView: FC<LoginViewProps> = ({handleSubmit, handleFormChange, formUser}) => {
    return (<div className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: "15px"}}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Log In</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-4">
                                        <input type="email"
                                               className="form-control form-control-lg"
                                               onChange={handleFormChange}
                                               name="email"
                                               value={formUser.email}
                                        />
                                        <label className="form-label">Your Email</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password"
                                               className="form-control form-control-lg"
                                               onChange={handleFormChange}
                                               name="password"
                                               value={formUser.password}
                                        />
                                        <label className="form-label">Password</label>
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
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Remember
                                                me</label>
                                        </div>
                                    </div>
                                    <p className="text-center text-muted mt-5 mb-0">Create new account <Link
                                        to="/register" className="fw-bold text-body"><u>Register here</u></Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default LoginView;