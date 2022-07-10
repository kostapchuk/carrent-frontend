import { FC } from 'react';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import AppRouter from './components/AppRouter';
import Header from './components/header/Header';

const App: FC = () => (
  <PayPalScriptProvider
    options={{
      'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID
        ? process.env.REACT_APP_PAYPAL_CLIENT_ID
        : '',
      components: 'buttons',
      currency: 'USD',
    }}
  >
    <Header />
    <AppRouter />
  </PayPalScriptProvider>
);

export default App;
