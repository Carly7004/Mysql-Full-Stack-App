import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: null,
    image: "",
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();

  const { id } = useParams();
  console.log(id);
  // const productId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/products/${id}`, product);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
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
      {error && "Something went wrong!"}
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>See all books</Link>
    </div>
  );
};

export default Update;
