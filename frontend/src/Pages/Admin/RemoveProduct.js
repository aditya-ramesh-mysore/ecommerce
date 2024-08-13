import React, { useState, useEffect } from 'react';
import "./removeProduct.css";

function RemoveProduct() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch('http://localhost:8080/v1/products', {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (product) => {
    if (selectedProducts.includes(product.id)) {
      setSelectedProducts(selectedProducts.filter(id => id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product.id]);
    }
  };

  

  // Delete selected products
  const deleteSelectedProducts = async(event) => {
    event.preventDefault();
    selectedProducts.forEach(id => {
      console.log(id);
      fetch(`http://localhost:8080/v1/products/${id}`, {
        method: "DELETE",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.status == 200) {
          setProducts(products.filter(product => product.id !== id));
          setSelectedProducts(selectedProducts.filter(selectedId => selectedId !== id));
        }
      })
        .catch(error => console.error('Error deleting product:', error));
    });
  };

  return (
    <div>
      <h1>Remove Products</h1>
      <button onClick={deleteSelectedProducts}>Delete Selected Products</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <input
              type="checkbox"
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleCheckboxChange(product)}
            />
            {product.name} - ${product.price} - Qty: {product.stockQuantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveProduct;
