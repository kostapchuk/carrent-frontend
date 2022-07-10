import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  CreateOrderActions,
  OnApproveActions,
  OnApproveData,
} from '@paypal/paypal-js/types/components/buttons';
import { PayPalButtons } from '@paypal/react-paypal-js';

import { User } from '../../api/ApiService';
import { RouteNames } from '../../routes';
import {
  fetchBalance,
  selectBalance,
  useBalanceDispatch,
} from '../../slices/BalanceSlice';

const PaypalButton: FC = () => {
  const balance = useSelector(selectBalance);
  const dispatch = useBalanceDispatch();
  const navigate = useNavigate();

  const createOrder = (
    paypalData: Record<string, unknown>,
    actions: CreateOrderActions
  ) =>
    User.findDebt().then((data) =>
      actions.order
        .create({
          purchase_units: [
            {
              description: 'Car rent payment',
              amount: {
                currency_code: 'USD',
                value: data.toString(),
              },
            },
          ],
          application_context: {
            shipping_preference: 'NO_SHIPPING',
          },
        })
        .then((orderId: string) => orderId)
    );

  const onApprove = (data: OnApproveData, actions: OnApproveActions) =>
    // eslint-disable-next-line
    actions.order!.capture().then(() => {
      navigate(RouteNames.SUCCESS_PAYMENT);
      User.payDebt();
      dispatch(fetchBalance());
    });

  const onCancel = () => {
    navigate(RouteNames.CANCELLED_PAYMENT);
  };

  return balance < 0 ? (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onCancel={onCancel}
      style={{
        layout: 'horizontal',
        color: 'black',
        label: 'paypal',
        height: 25,
        tagline: false,
      }}
    />
  ) : (
    <div>To be done later</div>
  );
};

export default PaypalButton;
