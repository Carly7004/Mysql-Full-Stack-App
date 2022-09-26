import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: null,
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/products", product);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(product);
  return (
    <div className="form">
      <h2>Add New Products</h2>
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
      <button className="formButton" onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Add;
