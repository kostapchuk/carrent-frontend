import {createContext} from "react";

const BalanceContext = createContext({
    balance: 0,
    setBalance: () => {},
});

export default BalanceContext;