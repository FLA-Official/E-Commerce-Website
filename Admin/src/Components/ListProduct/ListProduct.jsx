import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png"; // Importing a cross icon for removing products

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  // Asynchronous function to fetch all products from the backend server
  const fetchinfo = async () => {
    // Send a GET request to the backend endpoint '/allproducts'
    await fetch("http://localhost:4000/allproducts")
      // Parse the JSON response from the server
      .then((res) => res.json())
      // After parsing, update the component's 'allProducts' state with the fetched product data
      .then((data) => {
        setAllProducts(data);
      });}
    // The 'useEffect' hook is used to call 'fetchinfo' when the component mounts
    useEffect(() => {
      fetchinfo();
    }, []); // Fetch products when the component mounts, '[]'ensures it runs only once

  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div class="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div class="listproduct-allproduct">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <div key={index} class="listproduct-format-main listproduct-format">
              <img
                src={product.image}
                alt=""
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img src={cross_icon} alt="" className="listproduct-remove-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
