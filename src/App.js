import LoggedInContext from "./context/LoggedInContext";
import {useMemo, useState} from "react";
import LocalStorage from "./storage/LocalStorage";
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

    return (
        <PayPalScriptProvider
            options={{
                "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                components: "buttons",
                currency: "USD"
            }}
        >
            <LoggedInContext.Provider value={loggedInValue}>
                <Header/>
                <AppRouter/>
            </LoggedInContext.Provider>
        </PayPalScriptProvider>
    );
}

export default App;
