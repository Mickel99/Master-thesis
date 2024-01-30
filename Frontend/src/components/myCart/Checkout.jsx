import  { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    // Här kan du implementera logik för att hantera beställningen
    // Exempelvis, skicka data till en backend eller visa en bekräftelsemeddelande
    console.log("Order placed:", { customerInfo, cartItems });

    // Visa tack-sidan eller navigera till en annan sida
    // Du kan använda en state-variabel för att visa olika delar av komponenten
    // eller använda en router för att navigera till en annan sida
    setOrderPlaced(true);
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.attributes.productPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

  if (orderPlaced) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Thank you for your order!</h2>
        <p>Your order has been successfully placed.</p>
      </div>
    );
  }

  // Visa betalningsinformation baserat på valt betalningssätt
  let paymentInfo;
  if (customerInfo.paymentMethod === "card") {
    paymentInfo = (
      <div>
        <label style={{ display: "block", margin: "10px 0" }}>
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
        <label style={{ display: "block", margin: "10px 0" }}>
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
        <label style={{ display: "block", margin: "10px 0" }}>
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
        <p style={{ fontSize: "16px", margin: "0" }}>Swish to: 123 123 123</p>
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
        <p style={{ fontSize: "16px", margin: "0" }}>Pay with Klarna</p>
        {/* Lägg till Klarna-specifik information här */}
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
        background: "#f8f8f8", // Updated background color
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
        <label style={{ display: "block", margin: "10px 0" }}>
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
        <label style={{ display: "block", margin: "10px 0" }}>
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
        <label style={{ display: "block", margin: "10px 0" }}>
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
        <label style={{ display: "block", margin: "10px 0" }}>
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
        {/* Lägg till fler formulärfält efter behov */}
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
