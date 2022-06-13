import React from "react";
import { Link } from "react-router-dom";
import {FC} from 'react'

interface AddCarViewProps {
  handleSubmit: (event: React.FormEvent) => void,
  handleFormChange: (event: React.ChangeEvent) => void,
  formUser,
}

const AddCarView: FC<AddCarViewProps> = ({handleSubmit, handleFormChange, formUser}) => {

    return (
<div className="vh-100 bg-image pt-5">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: "15px"}}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Add Car</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-2">
                                        <input type="text"
                                               className="form-control form-control-lg"
                                               onChange={handleFormChange}
                                               name="brand"
                                               value={formUser.email}
                                               placeholder="Brand"
                                        />
                                        <label className="form-label">Brand</label>
                                    </div>
                                    <div className="form-outline mb-2">
                                        <input type="text"
                                               className="form-control form-control-lg"
                                               onChange={handleFormChange}
                                               name="model"
                                               value={formUser.password}
                                               placeholder="Model"
                                        />
                                        <label className="form-label">Model</label>
                                    </div>
                                    <div className="form-outline mb-2">
                                        <input type="text"
                                               className="form-control form-control-lg"
                                               onChange={handleFormChange}
                                               name="car-rent-price"
                                               value={formUser.password}
                                               placeholder="Car Rent Price"
                                        />
                                        <label className="form-label">Car Rent Price</label>
                                    </div>
                                    <div className="form-outline mb-2">
                                        <input type="text"
                                               className="form-control form-control-lg"
                                               onChange={handleFormChange}
                                               name="car-book-price"
                                               value={formUser.password}
                                               placeholder="Car Book Price"
                                        />
                                        <label className="form-label">Car Book Price</label>
                                    </div>
                                    <div className="form-outline mb-2">
                                        <input type="text"
                                               className="form-control form-control-lg"
                                               onChange={handleFormChange}
                                               name="car-image"
                                               value={formUser.password}
                                               placeholder="Car Image URL"
                                        />
                                        <label className="form-label">Car Image URL</label>
                                    </div>

                                    <div className="form-outline mb-2">
                                      
                                      <div className="dropdown">
                                          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                            Car Status
                                          </button>
                                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button className="dropdown-item" type="button">FREE</button></li>
                                            <li><button className="dropdown-item" type="button">In Rent</button></li>
                                            <li><button className="dropdown-item" type="button">In Booking</button></li>
                                            <li><button className="dropdown-item" type="button">In Rent Paused</button></li>
                                            <li><button className="dropdown-item" type="button">UNVALIBLE</button></li>
                                          </ul>
                                      </div>
                                        <label className="form-label">Car Status</label>
                                    </div>

                                    <div className="d-flex justify-content-center mt-4">
                                        <button
                                            className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">
                                            Save Car
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default AddCarView;