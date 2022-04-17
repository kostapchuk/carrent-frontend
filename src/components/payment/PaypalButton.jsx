import {useContext} from "react";
import {PayPalButtons} from "@paypal/react-paypal-js";
import ApiService from "../../api/ApiService";
import BalanceContext from "../../context/BalanceContext";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";

const PaypalButton = () => {
    const {balance, setBalance} = useContext(BalanceContext);
    const navigate = useNavigate();

    const createOrder = (data, actions) => {
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
                navigate(RouteNames.SUCCESS_PAYMENT);
                ApiService.payDebt();
                setBalance(ApiService.fetchBalance()
                    .then(r => r.data));
            });
    };

    const onCancel = (data, actions) => {
        navigate(RouteNames.CANCELLED_PAYMENT);
    };

    return (
        balance < 0
            ?
            <PayPalButtons
                style={{
                    layout: 'horizontal',
                    size: 'small',
                    color: 'black',
                    label: 'paypal',
                    height: 25,
                    tagline: 'false'
                }}
                createOrder={createOrder}
                onApprove={onApprove}
                onCancel={onCancel}
            />
            :
            <></>
    )
}

export default PaypalButton;