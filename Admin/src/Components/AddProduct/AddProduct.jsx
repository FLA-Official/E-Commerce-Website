import React from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg"; // Placeholder for the image path

const AddProduct = () => {
  //here is the connection part to the backend
  // State to store the selected image file (for preview or upload); initially false
  const [image, setImage] = React.useState(false);

  // State to store product form details (name, image URL/path, category, prices)
  const [productDetails, setProductDetails] = React.useState({
    name: "", // Product name input
    image: "", // Product image URL/path (to store after upload)
    category: "women", // Default category
    new_price: "", // New price input
    old_price: "", // Old price input
  });

  // Handler for <input type="file"> that updates 'image' with the selected file object
  const imageHandler = (e) => {
    setImage(e.target.files[0]); // Stores the first selected file for preview/upload
  };

  // Handler for other input fields that updates the corresponding property in productDetails
  const changeHandler = (e) => {
    // Uses computed property name [e.target.name] to dynamically update the correct field
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  // Function to handle form submission (e.g., when the "ADD" button is clicked)
  const Add_Product = async (e) => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Upload response:", data);
        responseData = data;
      });

      if(responseData.success){
        product.image = responseData.image_url; // Update product image with the iamge url returned from the server
        console.log(product);
      }
  };

  //here is the frontend part of the AddProduct component
  // This component allows users to add a new product by filling out a form with product details
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type Here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type Here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type Here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="addproduct-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-image"
            alt=""
          />
          {/* If there is an image, display it; otherwise, show the upload area placeholder. Here URL.createObjectURL creates a temporary URL for the selected file.  */}
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct-btn"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
