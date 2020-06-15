import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GuEROKY0BxumztShDHka6ZCuwE55G4vUL0kICsJUJofIjN08hQrHTypQP61PzN9H4PntCA2Xyq4UyQWNOywz79400wqYdLW25';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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