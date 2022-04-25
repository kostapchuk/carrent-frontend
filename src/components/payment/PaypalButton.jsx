import {PayPalButtons} from "@paypal/react-paypal-js";
import ApiService from "../../api/ApiService";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes";
import {updateBalance, selectBalance, fetchBalance} from '../../slices/BalanceSlice'
import {useDispatch, useSelector} from "react-redux";

const PaypalButton = () => {

    const balance = useSelector(selectBalance);
    const dispatch = useDispatch();
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
                dispatch(fetchBalance());
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