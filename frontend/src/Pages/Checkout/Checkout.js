import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import displayToast from "../../utils/displayToast";

const Checkout = () => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const {
    "Invoice Date": invoiceDate,
    "Order ID": orderId,
    Items: items,
  } = checkoutItems;

  const totalPrice = items
    ? items.reduce((total, item) => total + item.Price * item.Quantity, 0)
    : 0;

  console.log(totalPrice);
  const fetchCheckout = async () => {
    console.log("Checkout:Fetch");
    try {
      const response = await fetch("http://localhost:8080/v1/checkout");
      const data = await response.json();
      console.log("checkout data -  ", data);
      setCheckoutItems(data);
      displayToast({ type: "success", msg: "Order placed successfully." });
    } catch (error) {
      console.error("Error displaying checkout:", error);
      displayToast({ type: "error", msg: "Couldn't place your order. Something went wrong!" });
    }
  };
  console.log("checkout -  ", checkoutItems);

  useEffect(() => {
    console.log("Checkout:UseEffect");
    fetchCheckout();
  }, []);

  return (
    <div style={{
      backgroundColor: "aliceblue",
      marging: "20px",
      marginTop: "70px",
      marginLeft: "2%",
      padding: "20px",
      // height: "max-content",
      width: "500px",
    }}>
      <h2>Invoice</h2>
      <div>
          <p>Invoice Date: {invoiceDate} </p>
          {/* <input type="text" value={invoiceDate} readOnly /> */}
          <p>Order ID: {orderId}</p>
          {/* <input type="text" value={orderId} readOnly /> */}
        </div>
        <div>
          <label>Items:</label>
          {items &&
            items.map((item, index) => (
              <div key={index}>
                <p>Product Name: {item["Product Name"]}</p>
                {/* <input type="text" value={item["Product Name"]} readOnly /> */}
                <p>Price: {item.Price}</p>
                {/* <input type="text" value={item.Price} readOnly /> */}
                <p>Quantity: {item.Quantity}</p>
                {/* <input type="text" value={item.Quantity} readOnly /> */}
              </div>
            ))}
        </div>
        <div>
          <p>Total Price: {totalPrice.toFixed(2)}</p>
          {/* <input type="text" value={totalPrice.toFixed(2)} readOnly /> */}
        </div>


      {/* <form>
        <div>
          <label>Invoice Date:</label>
          <input type="text" value={invoiceDate} readOnly />
          <label>Order ID:</label>
          <input type="text" value={orderId} readOnly />
        </div>
        <div>
          <label>Items:</label>
          {items &&
            items.map((item, index) => (
              <div key={index}>
                <label>Product Name:</label>
                <input type="text" value={item["Product Name"]} readOnly />
                <label>Price:</label>
                <input type="text" value={item.Price} readOnly />
                <label>Quantity:</label>
                <input type="text" value={item.Quantity} readOnly />
              </div>
            ))}
        </div>
        <div>
          <label>Total Price:</label>
          <input type="text" value={totalPrice.toFixed(2)} readOnly />
        </div>
      </form> */}
      <Link to="/shopping">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Checkout;
