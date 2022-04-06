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
            {!LocalStorage.getUserId() && <Link to="/register">Register | </Link>}
            {!LocalStorage.getUserId() && <Link to="/">Login | </Link>}
            <Logout/>
            <Link to="/cars">Cars</Link> |{" "}
            {LocalStorage.getUserId() && <Link to="/rides">History</Link>}
            {LocalStorage.getUserId() && <p>Balance: {balance} $</p>}
            {LocalStorage.getUserId() && <button onClick={payTheDebt}>Pay</button>}
            {LocalStorage.getUserId() && <Link to="/documents">Documents</Link>}
            <p style={{color: "red"}}>header ends here TYT</p>
            <button type="button" class="btn btn-primary">Primary</button>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/register">Register</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/">Login</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/cars">Cars</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Header;