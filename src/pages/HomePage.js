

import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './HomePage.css';

function HomePage() {
  return (
    <div className="page-container">
      <h1>产品列表</h1>

      <div className="product-grid">

        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}

        
      </div>
    </div>
  );
}

export default HomePage;
