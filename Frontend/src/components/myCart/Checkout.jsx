import { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
// Get the shopping cart from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
// State for customer information and if the order is placed
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

// Handle changes to the customer information form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

// Function to handle when the user clicks the "Place Order" button
  const handlePlaceOrder = () => {
    console.log("Order placed:", { customerInfo, cartItems });

// Update state to indicate the order has been placed
    setOrderPlaced(true);
  };

// Function to calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.attributes.productPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

// If the order is placed, a thank you message is displayed
  if (orderPlaced) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Thank you for your order!</h2>
        <p>Your order has been successfully placed.</p>
      </div>
    );
  }

  let paymentInfo;
  if (customerInfo.paymentMethod === "card") {
    paymentInfo = (
      <div>
        <label style={{ display: "block", margin: "10px 0", color: "black" }}>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "block", margin: "10px 0", color: "black" }}>
          Expiry Date:
          <input
            type="text"
            name="expiryDate"
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "block", margin: "10px 0", color: "black" }}>
          CVV:
          <input
            type="text"
            name="cvv"
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
      </div>
    );
  } else if (customerInfo.paymentMethod === "swish") {
    paymentInfo = (
      <div>
        <p style={{ fontSize: "16px", margin: "0", color: "black" }}>
          Swish to: 123 123 123
        </p>
        <img
          src="./src/Image/test.png"
          alt="Swish QR Code"
          style={{ width: "100px", height: "100px", margin: "10px 0" }}
        />
      </div>
    );
  } else if (customerInfo.paymentMethod === "klarna") {
    paymentInfo = (
      <div>
        <p style={{ fontSize: "16px", margin: "0", color: "black" }}>
          Pay with Klarna
        </p>
        <img
          src=".\src\Image\klarna-og.png"
          alt="Klarna Logo"
          style={{ width: "100px", height: "50px", margin: "10px 0" }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        background: "#f8f8f8",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Secure Checkout
      </h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={`${import.meta.env.VITE_BASE_URL}${
              item.attributes.productImg.data[0].attributes.url
            }`}
            alt={item.attributes.productName}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "20px",
              borderRadius: "5px",
            }}
          />
          <div>
            <p style={{ fontSize: "16px", margin: "0", color: "#333" }}>
              {item.attributes.productName} - Quantity: {item.quantity}
            </p>
            <p style={{ fontSize: "14px", color: "#777", margin: "0" }}>
              Price: ${item.attributes.productPrice}
            </p>
            <p style={{ fontSize: "14px", color: "#777", margin: "0" }}>
              Total: $
              {(item.attributes.productPrice * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <strong style={{ fontSize: "18px", color: "#333" }}>
          Total Price: ${calculateTotalPrice()}
        </strong>
      </div>
      <form style={{ marginTop: "20px" }}>
        <label style={{ display: "block", margin: "10px 0", color: "black" }}>
          Name:
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "block", margin: "10px 0", color: "black" }}>
          Email:
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "block", margin: "10px 0", color: "black" }}>
          Address:
          <input
            type="text"
            name="address"
            value={customerInfo.address}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "block", margin: "10px 0", color: "black" }}>
          Payment Method:
          <div>
            <label htmlFor="card" className="payment-option">
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                checked={customerInfo.paymentMethod === "card"}
                onChange={handleInputChange}
              />
              <span>Credit Card</span>
            </label>
          </div>
          <div>
            <label htmlFor="swish" className="payment-option">
              <input
                type="radio"
                id="swish"
                name="paymentMethod"
                value="swish"
                checked={customerInfo.paymentMethod === "swish"}
                onChange={handleInputChange}
              />
              <span>Swish</span>
            </label>
          </div>
          <div>
            <label htmlFor="klarna" className="payment-option">
              <input
                type="radio"
                id="klarna"
                name="paymentMethod"
                value="klarna"
                checked={customerInfo.paymentMethod === "klarna"}
                onChange={handleInputChange}
              />
              <span>Klarna</span>
            </label>
          </div>
        </label>
        {paymentInfo}
        <button
          type="button"
          onClick={handlePlaceOrder}
          style={{
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Place Order
        </button>
      </form>
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "14px",
          color: "#777",
        }}
      >
        Your payment details are secure. We use encryption to protect your
        personal information.
      </p>
    </div>
  );
};

export default Checkout;
