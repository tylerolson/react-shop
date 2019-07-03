import React from 'react';
import Product from './Product';
import products from './products.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Products">
      {products.map(product => (
          <Product
          name={product.name}
          image={product.image}
          desc={product.desc}
          price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
