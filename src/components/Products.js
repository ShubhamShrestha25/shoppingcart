import React, { Component } from "react";
import formatCurrency from "../util";

export default class Products extends Component {
  render() {
    return (
      <ul className="products">
        {this.props.products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a
                href={"#" + product._id}
                onClick={() => this.openModal(product)}
              >
                <img src={product.image} alt={product.title}></img>
                <p>{product.title}</p>
              </a>
              <div className="product-price">
                <div> {formatCurrency(product.price)}</div>
                <button
                  onClick={() => this.props.addToCart(product)}
                  className="button primary"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
