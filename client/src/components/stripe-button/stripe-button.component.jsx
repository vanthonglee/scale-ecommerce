import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GuEROKY0BxumztShDHka6ZCuwE55G4vUL0kICsJUJofIjN08hQrHTypQP61PzN9H4PntCA2Xyq4UyQWNOywz79400wqYdLW25';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('payment successful')
    }).catch(error => {
      console.log('payment error', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please sure you use the provided credit card.'
      );
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='THONG CLOTHING Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;