import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>🛍️ Product Store</h1>
        <p>Browse our latest products fetched from a Spring WebFlux backend.</p>
      </header>

      <div className="product-grid">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <div className="product-info">
              <h3>{p.name}</h3>
              <p className="price">₹{p.price}</p>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
