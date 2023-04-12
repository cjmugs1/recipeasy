//  component to handle donations, including a donation form with fields for the user's name, email, and donation amount,
//  as well as integration with Stripe to process payments
import React from 'react';
import { Card } from 'antd';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; // assuming you have the CheckoutForm component in the same folder


const stripePromise = loadStripe(''); // addStripe public key here

const Donations = () => {

  return (
    <Card title="Please support our work and donate today!">
    
        <Elements>
          <CheckoutForm />
        </Elements>
 
    </Card>
  );
};

export default Donations;
