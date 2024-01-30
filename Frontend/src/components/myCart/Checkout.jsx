import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    // Lägg till fler fält efter behov
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    // Här kan du implementera logik för att hantera beställningen
    // Till exempel, skicka data till en backend eller visa en bekräftelsemeddelande
    console.log('Order placed:', { customerInfo, cartItems });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.attributes.productPrice * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Checkout</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${item.attributes.productImg.data[0].attributes.url}`}
            alt={item.attributes.productName}
            style={{ width: '50px', height: '50px', marginRight: '20px', borderRadius: '5px' }}
          />
          <div>
            <p style={{ fontSize: '16px', margin: '0' }}>{item.attributes.productName} - Quantity: {item.quantity}</p>
            <p style={{ fontSize: '14px', color: '#777', margin: '0' }}>Price: ${item.attributes.productPrice}</p>
            <p style={{ fontSize: '14px', color: '#777', margin: '0' }}>Total: ${(item.attributes.productPrice * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <strong style={{ fontSize: '18px', color: '#333' }}>Total Price: ${calculateTotalPrice()}</strong>
      </div>
      <form>
        <label style={{ display: 'block', margin: '10px 0' }}>
          Name:
          <input type="text" name="name" value={customerInfo.name} onChange={handleInputChange} style={{ width: '100%', padding: '8px', fontSize: '14px' }} />
        </label>
        <label style={{ display: 'block', margin: '10px 0' }}>
          Email:
          <input type="email" name="email" value={customerInfo.email} onChange={handleInputChange} style={{ width: '100%', padding: '8px', fontSize: '14px' }} />
        </label>
        <label style={{ display: 'block', margin: '10px 0' }}>
          Address:
          <input type="text" name="address" value={customerInfo.address} onChange={handleInputChange} style={{ width: '100%', padding: '8px', fontSize: '14px' }} />
        </label>
        {/* Lägg till fler formulärfält efter behov */}
        <button type="button" onClick={handlePlaceOrder} style={{ background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
