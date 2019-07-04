import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <div className="product-image">
          <img className="product-image" src={this.props.image} alt="" />
        </div>
        <div className="product-info">
          <h1>{this.props.name}</h1>
          <h3>{this.props.price}</h3>
        </div>
        <button className="product-button" type="button">Add to Cart</button>
      </div>
    );
  }
}

export default Product;