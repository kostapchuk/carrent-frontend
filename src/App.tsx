import AppRouter from "./components/AppRouter";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import Header from "./components/header/Header";
import React from 'react'

function App() {

    return (
        <PayPalScriptProvider
            options={{
                "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID ? process.env.REACT_APP_PAYPAL_CLIENT_ID : "",
                components: "buttons",
                currency: "USD"
            }}
        >
            <Header/>
            <AppRouter/>
        </PayPalScriptProvider>
    )
}

export default App;
