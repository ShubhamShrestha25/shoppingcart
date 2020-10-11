import React, { Component } from "react";
import formatCurrency from "../util";

class Cart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        name: "",
        address: "",
        email: "",
       showCheckout: false
    }
  }
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  createOrder = (e) =>{
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.state.cartItems,
    };
    this.props.createOrder(order);
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            you have {cartItems.length} in the cart
          </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)} X {item.count} {" "}
                      <button
                        className="button"
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {cartItems.length !== 0 && (
              <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button className="button primary" onClick={() => this.setState({showCheckout : true})}>Proceed</button>
                </div>
              </div>
              {this.state.showCheckout && (
                <div className="cart">
                <form onSubmit={this.createOrder}>
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input name ="email" type="email" required onChange={this.handleInput}/>
                      </li>
                      <li>
                      <label> Name </label>
                      <input name ="name" type="text" required onChange={this.handleInput}/>
                      </li>
                      <li>
                      <label>Address</label>
                      <input name ="address"type="text" required onChange={this.handleInput}/>
                    </li>
                    <li>
                      <button  className="button primary" type="submit">
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
                </div>
              )}
              </div>
            )}
          </div>
        </div>
      </div>
      
    );
  }
}

export default Cart;
