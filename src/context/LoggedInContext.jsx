import {createContext} from "react";

const LoggedInContext = createContext({
    loggedIn: false,
    setLoggedIn: () => {},
});

export default LoggedInContext;