import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IRegisterUser } from '../../types/types';

interface RegisterViewProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formUser: IRegisterUser;
}

const RegisterView: FC<RegisterViewProps> = ({
  handleSubmit,
  handleFormChange,
  formUser,
}) => (
  <div className="vh-100 bg-image">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">
                  Create an account
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      className="form-control form-control-lg"
                      name="firstName"
                      onChange={handleFormChange}
                      placeholder="First Name"
                      type="text"
                      value={formUser.firstName}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      className="form-control form-control-lg"
                      name="lastName"
                      onChange={handleFormChange}
                      placeholder="Last Name"
                      type="text"
                      value={formUser.lastName}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      className="form-control form-control-lg"
                      name="email"
                      onChange={handleFormChange}
                      placeholder="Your Email"
                      type="email"
                      value={formUser.email}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      className="form-control form-control-lg"
                      name="password"
                      onChange={handleFormChange}
                      placeholder="Password"
                      type="password"
                      value={formUser.password}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      className="form-control form-control-lg"
                      name="phone"
                      onChange={handleFormChange}
                      placeholder="Phone"
                      type="text"
                      value={formUser.phone}
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body"
                      type="button"
                    >
                      Register
                    </button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">
                    Have already an account?
                    <Link className="fw-bold text-body" to="/login">
                      <u>Login here</u>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterView;
