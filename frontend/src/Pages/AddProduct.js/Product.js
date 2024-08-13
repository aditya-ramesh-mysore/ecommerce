import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/v1/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1
        style={{
          // marginTop: "10px",
          height: "50px",
          width: "300px",
          alignContent: "center",
        }}
      >
        Product Catalog
      </h1>
      <ProductList products={products} />
    </div>
  );
};

//const Product = () => {
//  const products = [
//    {
//      name: "Product 1",
//      image: "product1.jpg",
//      description: "Description of product 1",
//      price: 10.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//  ];
//  return (
//    <div className="App">
//      <h1>Product Catalog</h1>
//      <ProductList products={products} />
//    </div>
//  );
//};

export default Product;
