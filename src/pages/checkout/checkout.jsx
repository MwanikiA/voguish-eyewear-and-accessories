import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './checkout.css';
import Navbar from '../../components/navbar/nav';

const Checkout = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(0);
  
    const handlePaymentSuccess = (response) => {
      console.log(response);

    };
  
    const handlePaymentClose = () => {
      console.log('Payment closed');
      
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'amount') {
        setAmount(value);
      }
    };
  
    return (
      <>
      <Navbar/>
      <div className="checkout-container">
      <h2>Checkout Page</h2>
      <form className="checkout-form">
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleInputChange}
          />
        </div>
        <PaystackButton
          text="Pay Now"
          className="payButton"
          callback={handlePaymentSuccess}
          close={handlePaymentClose}
          disabled={false} 
          embed={false} 
          reference={`ref-${Math.floor(Math.random() * 1000000000 + 1)}`}
          email={email}
          amount={amount * 100} 
          paystackkey="pk_test_eb8f62ae097999f491df18a70c58bebd485c9d73"
          tag="button"
        />
      </form>
    </div>
     </>
    );
  };
  
  export default Checkout;