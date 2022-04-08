import {Link} from "react-router-dom";
import LocalStorage from "../../storage/LocalStorage";
import Logout from "../Login/Logout";
import {useEffect, useState} from "react";
import ApiService from "../../api/ApiService";

const Header = () => {

    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (LocalStorage.getUserId()) {
            ApiService.fetchBalance()
                .then(r => {
                    setBalance(r.data);
                })
        }
    }, [balance])

    const payTheDebt = () => {
        ApiService.payTheDebt()
            .then(r => {
                window.location.href = r.data;
            });
    }

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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {!LocalStorage.getUserId() && 
                                    <Link className="nav-link" aria-current="page" to="/register">Register</Link>}
                            </li>
                            <li className="nav-item">
                                {!LocalStorage.getUserId() && <Link className="nav-link" to="/">Login</Link>}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cars">Cars</Link>
                            </li>
                            <li className="nav-item">
                                {LocalStorage.getUserId() && <Link className="nav-link" to="/documents">Documents</Link>}
                            </li>
                            <li className="nav-item">
                                {LocalStorage.getUserId() && <Link className="nav-link" to="/rides">History</Link>}
                            </li>
                            <li className="nav-item">
                                <Logout/>
                            </li>
                            <li className="nav-item">
                                {LocalStorage.getUserId() && <p className="nav-link"> {balance} $</p>}
                            </li>
                            <li className="nav-item">
                                {LocalStorage.getUserId() &&
                                <button className="btn btn-primary" onClick={payTheDebt}>Pay</button>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;