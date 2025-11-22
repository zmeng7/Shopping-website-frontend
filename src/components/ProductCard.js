import React from 'react';
import './ProductCard.css'; // 等下写样式
import { Link } from 'react-router-dom';


function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />

      <h2 className="card-title">{product.name}</h2>
      <p className="card-price">${product.price}</p>
      <p className="card-stock">库存: {product.countInStock}</p>
    </div>
    </Link>
);
}

export default ProductCard;
