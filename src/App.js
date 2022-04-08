import RegisterContainer from "./components/Register/RegisterContainer";
import {Route, Routes} from 'react-router-dom';
import LoginContainer from "./components/Login/LoginContainer";
import RegistrationResultView from "./components/Register/RegistrationResultView";
import CarContainer from "./components/Cars/CarContainer";
import CarsContainer from "./components/Cars/CarsContainer";
import RidesContainer from "./components/Rides/RidesContainer";
import UploadFileComponent from "./components/documents/UploadFileComponent";
import Header from "./components/header/Header";
import UsersContainer from "./components/users/UsersContainer";
import UserContainer from "./components/users/UserContainer";
import LoggedInContext from "./context/LoggedInContext";
import {useMemo, useState} from "react";
import LocalStorage from "./storage/LocalStorage";
import BalanceContext from "./context/BalanceContext";

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
                <Header/>
                <Routes>
                    <Route path='/register' element={<RegisterContainer/>}/>
                    <Route path='/' element={<LoginContainer/>}/>
                    <Route path='/rides' element={<RidesContainer/>}/>
                    <Route path='/success-payment' element={<RidesContainer/>}/>
                    <Route path='/cancelled-payment' element={<LoginContainer/>}/>
                    <Route path='/cars' element={<CarsContainer/>}/>
                    <Route path='/cars/:id' element={<CarContainer/>}/>
                    <Route path='/register-result' element={<RegistrationResultView/>}/>
                    <Route path='/documents' element={<UploadFileComponent/>}/>
                    <Route path='/admin/users' element={<UsersContainer/>}/>
                    <Route path='/admin/users/:id' element={<UserContainer/>}/>
                </Routes>
            </BalanceContext.Provider>
        </LoggedInContext.Provider>
    );
}

export default App;
