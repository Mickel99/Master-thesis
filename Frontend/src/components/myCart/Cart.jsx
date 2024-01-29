// Cart.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../Redux/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [isCartOpen, setCartOpen] = useState(false);

  const handleRemoveItem = (itemId) => {
    dispatch(cartActions.removeItemFromCart(itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.attributes.productPrice * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart style={{ fontSize: '1.8rem', marginRight: '10px', cursor: 'pointer' }} onClick={() => setCartOpen(!isCartOpen)} />
      {isCartOpen && (
        <div style={{ position: 'absolute', top: '3rem', right: '0', width: '300px', background: 'white', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', zIndex: '1', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ textAlign: 'center', padding: '15px', borderBottom: '1px solid #ccc', fontSize: '1.5rem', fontWeight: 'bold', background: '#4CAF50', color: 'white' }}>Shopping Cart</div>
          {cartItems.length === 0 ? (
            <p style={{ padding: '20px', textAlign: 'center', color: '#555' }}>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '15px', padding: '15px', display: 'flex', alignItems: 'center' }}>
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${item.attributes.productImg.data[0].attributes.url}`}
                    alt={item.attributes.productName}
                    style={{ maxWidth: '70px', marginRight: '15px', borderRadius: '5px' }}
                  />
                  <div style={{ flex: '1' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: '0', marginBottom: '8px', color: '#333' }}>{item.attributes.productName}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ margin: '0', fontSize: '1rem', color: '#4CAF50' }}>${item.attributes.productPrice}</p>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ margin: '0', marginLeft: '10px', fontSize: '1rem', color: '#777' }}>Qty: {item.quantity}</p>
                        <button onClick={() => handleRemoveItem(item.id)} style={{ marginLeft: '15px', fontSize: '0.9rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '3px', padding: '5px 10px', cursor: 'pointer' }}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <strong style={{ fontSize: '1.3rem', color: '#333' }}>Total Price: ${calculateTotalPrice()}</strong>
              </div>
              <button
                style={{ width: '100%', padding: '15px', marginTop: '15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }}
                onClick={() => console.log('Proceed to Checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
