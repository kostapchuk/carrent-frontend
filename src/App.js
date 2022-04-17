import LoggedInContext from "./context/LoggedInContext";
import {useMemo, useState} from "react";
import LocalStorage from "./storage/LocalStorage";
import BalanceContext from "./context/BalanceContext";
import AppRouter from "./components/AppRouter";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import Header from "./components/header/Header";

// admin
// verified
// logged in
// loading

function App() {

    const [loggedIn, setLoggedIn] = useState(LocalStorage.getUserId());
    const loggedInValue = useMemo(
        () => ({loggedIn, setLoggedIn}),
        [loggedIn]
    );

    const [balance, setBalance] = useState(0);
    const balanceValue = useMemo(
        () => ({balance, setBalance}),
        [balance]
    );


    return (
        <PayPalScriptProvider
            options={{
                "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                components: "buttons",
                currency: "USD"
            }}
        >
            <LoggedInContext.Provider value={loggedInValue}>
                <BalanceContext.Provider value={balanceValue}>
                    <Header/>
                    <AppRouter/>
                </BalanceContext.Provider>
            </LoggedInContext.Provider>
        </PayPalScriptProvider>
    );
}

export default App;
