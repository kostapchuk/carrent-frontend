import {Link} from "react-router-dom";
import React, {FC} from "react";
import HeaderNavbar from "./HeaderNavbar";

const Header: FC = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/cars">CarRent</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <HeaderNavbar/>
                </div>
            </nav>
        </div>
    );
}

export default Header;
