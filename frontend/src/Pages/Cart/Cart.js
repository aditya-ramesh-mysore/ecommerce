import React, { useState, useEffect } from "react";
import CartLayout from "./CartLayout";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:8080/v1/cart");
      const data = await response.json();
      console.log("cartData ", data);
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="main-layout-cart">
      <h3 style={{ height: "50px", width: "300px", alignContent: "center" }}>
        Shopping Cart
      </h3>
      <CartLayout items={cartItems} fetchCartItems={fetchCartItems} />
    </div>
  );
};

export default Cart;
