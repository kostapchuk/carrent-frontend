import {useContext, useEffect, useState} from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import ApiService from "../../api/ApiService";
import BalanceContext from "../../context/BalanceContext";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";

// GET BALANCE FROM BACKEND
// UPDATE BALANCE IN DB AFTER SUCCESS

const ButtonWrapper = () => {
    const {balance, setBalance} = useContext(BalanceContext);
    const navigate = useNavigate();

    // creates a paypal order
    const createOrder = (data, actions) => {
        let orderId = null;
        return ApiService.findDebt()
            .then(r => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                description: "Sunflower",
                                amount: {
                                    currency_code: "USD",
                                    value: r.data,
                                },
                            },
                        ],
                        application_context: {
                            shipping_preference: "NO_SHIPPING",
                        },
                    })
                    .then(orderId => {
                        return orderId;
                    });
            });

    };

    const onApprove = (data, actions) => {
        return actions.order.capture()
            .then(() => {
                ApiService.payDebt();
                setBalance(ApiService.fetchBalance()
                    .then(r => r.data))
                navigate(RouteNames.SUCCESS_PAYMENT)
            });
    };

    return (
        <PayPalButtons
            style={{layout: "vertical"}}
            createOrder={createOrder}
            onApprove={onApprove}
        />
    )
}

export default ButtonWrapper;