import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProduts] = useState([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/products")
                setProduts(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllProducts()
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/products"+id)
            window.location.reload()
        } catch (error) {}
    }

    return (
    <div>
        <h1>Carly Product Shop</h1>
        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    {product.image && <img src={product.image} alt='' />}
                    <h2>{product.title}</h2>
                    <p>{product.desc}</p>
                    <h2>{product.price}</h2>
                    <button className='delete' onClick={() => handleDelete(product.id)}>Delete</button>
                    <button className='update'><Link to={`/update/${product.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <button><Link to='/add'>Add New</Link></button>
    </div>
  )
}

export default Products