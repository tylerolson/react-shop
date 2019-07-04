import React, {useState} from 'react';
import Product from './Product';
import products from './products.json';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const filteredProducts = products.filter(function(product){
      return product.name.toLowerCase().indexOf(search) > -1;
    });

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" placeholder="Search" value={search} onChange={updateSearch} />
      </form>
      <div className="Products">
      {filteredProducts.map(product => (
          <Product
          key={filteredProducts.indexOf(product)}
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
