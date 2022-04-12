import LoggedInContext from "./context/LoggedInContext";
import {useMemo, useState} from "react";
import LocalStorage from "./storage/LocalStorage";
import BalanceContext from "./context/BalanceContext";
import AppRouter from "./components/AppRouter";

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
        <LoggedInContext.Provider value={loggedInValue}>
            <BalanceContext.Provider value={balanceValue}>
                <AppRouter/>
            </BalanceContext.Provider>
        </LoggedInContext.Provider>
    );
}

export default App;
