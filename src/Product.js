import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <h1>{this.props.name}</h1>
        <img className="productimage" src={this.props.image} alt="" />
        <p>{this.props.desc}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

export default Product;