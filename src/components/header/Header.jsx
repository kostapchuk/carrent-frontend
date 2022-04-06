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
        <div class="container">
            <Logout/>
            {LocalStorage.getUserId() && <p>Balance: {balance} $</p>}
            {LocalStorage.getUserId() && <button onClick={payTheDebt}>Pay</button>}

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {!LocalStorage.getUserId() && <Link className="nav-link" aria-current="page" to="/register">Register</Link>}
                        </li>

                        <li class="nav-item">
                            {!LocalStorage.getUserId() && <Link className="nav-link" to="/">Login</Link>}
                        </li>

                        <li class="nav-item">
                            <Link className="nav-link" to="/cars">Cars</Link>
                        </li>

                        <li class="nav-item">
                            {!LocalStorage.getUserId() && <Link className="nav-link" to="/documents">Documents</Link>}
                        </li>

                        <li class="nav-item">
                            {!LocalStorage.getUserId() && <Link className="nav-link" to="/rides">History</Link>}
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Header;