import React from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg"; // Placeholder for the image path

const AddProduct = () => {

  //here is the connection part to the backend
  // State to store the selected image file; initially false (no image selected)
  const [image, setImage] = React.useState(false);

  const [productDetails, setProductDetails] = React.useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  // Event handler for <input type="file"> that updates 'image' with the selected file
  const imageHandler = (e) => {
    setImage(e.target.files[0]); // e.target.files[0] is the first selected file object
  };

  const changeHandler = (e) => {
    setProductDetails({...productDetails, [e.target.name]: e.target.value });
  }

  //here is the frontend part of the AddProduct component
  // This component allows users to add a new product by filling out a form with product details
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" names="name" placeholder="Type Here" />
      </div>
      <div class="addproduct-price">
        <div class="addproduct-itemfield">
          <p>Price</p>
          <input type="text" names="old_price" placeholder="Type Here" />
        </div>
        <div class="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" names="new_price" placeholder="Type Here" />
        </div>
      </div>
      <div class="addproduct-itemfield">
        <p>Product Category</p>
        <select name="Category" className="addproduct-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div class="addproduct-itemfield">
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
          name="iamge"
          id="file-input"
          hidden
        />
      </div>
      <button className="addproduct-btn">ADD</button>
    </div>
  );
};

export default AddProduct;
