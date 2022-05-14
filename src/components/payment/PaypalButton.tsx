import {PayPalButtons} from "@paypal/react-paypal-js";
import ApiService from "../../api/ApiService";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import {fetchBalance, selectBalance, useBalanceDispatch} from '../../slices/BalanceSlice'
import {useSelector} from "react-redux";
import React, {FC} from "react";

const PaypalButton: FC = () => {

    const balance = useSelector(selectBalance);
    const dispatch = useBalanceDispatch();
    const navigate = useNavigate();

    const createOrder = (data: any, actions: any) => {
        return ApiService.findDebt()
            .then((r: any) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                description: "Car rent payment",
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
                    .then((orderId: number) => {
                        return orderId;
                    });
            });

    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture()
            .then(() => {
                navigate(RouteNames.SUCCESS_PAYMENT);
                ApiService.payDebt();
                dispatch(fetchBalance());
            });
    };

    const onCancel = () => {
        navigate(RouteNames.CANCELLED_PAYMENT);
    };

    return (
        balance < 0
            ?
            <PayPalButtons
                style={{
                    layout: 'horizontal',
                    color: 'black',
                    label: 'paypal',
                    height: 25,
                    tagline: false
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
