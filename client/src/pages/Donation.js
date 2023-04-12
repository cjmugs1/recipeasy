import React from 'react';
import { Card, Form, Input, Button, message } from 'antd';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/stripe-js';



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            message.error('Error. Please try again.');
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, token } = await stripe.createToken(cardElement);
        if (token) {
            console.log(token);
            message.success('Payment successful!');
        } else {
            message.error(error.message || 'Error. Please try again.');

        }
    };

    return (
        <Form layout = "vertical" onFinish={handleSubmit}>
        <Form.Item label="Card details">
            <CardElement options={{ style: { base: { fontSize: '18px' } } }} />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" disabled={!stripe}>
            Donate
            </Button>
        </Form.Item>
        </Form>
    );
};

export default CheckoutForm;