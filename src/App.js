import RegisterContainer from "./components/Register/RegisterContainer";
import { Routes, Route } from 'react-router-dom';
import LoginContainer from "./components/Login/LoginContainer";
import RegistrationResultView from "./components/Register/RegistrationResultView";
import CarContainer from "./components/Cars/CarContainer";
import CarsContainer from "./components/Cars/CarsContainer";

function App() {
    return (
        <div>
            {/*<Header />*/}
            <Routes>
                <Route path='/register' element={<RegisterContainer/>} />
                <Route path='/' element={<LoginContainer/>} />
                <Route path='/cars' element={<CarsContainer/>} />
                <Route path='/cars/:id' element={<CarContainer/>} />
                <Route path='/register-result' element={<RegistrationResultView/>} />
                {/*<Route path='/shop' component={ShopPage} />*/}
                {/*<Route exact path='/checkout' component={CheckoutPage} />*/}
            </Routes>
        </div>
    );
}

export default App;
