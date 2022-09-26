import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: null,
    image: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  console.log(location.pathname.split("/")[2]);

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/products/${productId}`, product);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h2>Update Product</h2>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="image"
        onChange={handleChange}
        name="image"
      />
      <button className="formButton" onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};

export default Update;
