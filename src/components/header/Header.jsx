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
        <div>
            {!LocalStorage.getUserId() && <Link to="/register">Register | </Link>}
            {!LocalStorage.getUserId() && <Link to="/">Login | </Link>}
            <Logout/>
            <Link to="/cars">Cars</Link> |{" "}
            {LocalStorage.getUserId() && <Link to="/rides">History</Link>}
            {LocalStorage.getUserId() && <p>Balance: {balance} $</p>}
            {LocalStorage.getUserId() && <button onClick={payTheDebt}>Pay</button>}
            {LocalStorage.getUserId() && <Link to="/documents">Documents</Link>}
            <p style={{color: "red"}}>header ends here TYT</p>
        </div>
    );
}

export default Header;